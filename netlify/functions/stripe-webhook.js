const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const admin = require('firebase-admin');

const serviceAccount = {
  "type": "service_account",
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL
};

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.handler = async (event, context) => {
  // Netlify Functions use an event object to pass the request data
  const sig = event.headers['stripe-signature'];
  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(event.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }

  // Handle the event asynchronously
  await handleEvent(stripeEvent);

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};

// Function to handle webhook events asynchronously
async function handleEvent(event) {
  try {
    switch (event.type) {
      case 'customer.subscription.created':
        // Extract necessary data from the event
        const stripeCustomerId = event.data.object.customer;
        const stripeCustomer = await stripe.customers.retrieve(stripeCustomerId);
        const firebaseUid = stripeCustomer.metadata.firebaseUid;

        // Retrieve user record from Firebase
        const userRecord = await admin.auth().getUser(firebaseUid);

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