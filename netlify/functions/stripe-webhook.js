const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const admin = require('firebase-admin');

const app = express();

app.use(bodyParser.json());

const serviceAccount = {
  "type": "service_account",
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY,

  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
   "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
};

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Webhook endpoint for handling Stripe events
app.post('/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event asynchronously
  handleEvent(event);

  // Acknowledge receipt of the event immediately
  res.status(200).end();
});

// Function to handle webhook events asynchronously
async function handleEvent(event) {
  try {
    switch (event.type) {
      case 'payment_intent.succeeded':
        // Extract necessary data from the event
        const stripeCustomerId = event.data.object.customer;

        // Retrieve user record from Firebase
        const userRecord = await admin.auth().getUserByPhoneNumber(stripeCustomerId);
        
        // Update the user's custom claims to indicate subscription status
        await admin.auth().setCustomUserClaims(userRecord.uid, { subscribed: true });
        
        console.log(`User ${userRecord.uid} subscribed.`);
        break;
      // Add more cases for other event types you want to handle
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  } catch (error) {
    console.error('Error handling event:', error);
    // Implement retry mechanism or error logging here
  }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});