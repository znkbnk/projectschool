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

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.handler = async (event, context) => {
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

  await handleEvent(stripeEvent);

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};

async function handleEvent(event) {
  try {
    console.log("Received Stripe webhook event:", event);

    switch (event.type) {
      case 'customer.subscription.created':
        const subscription = event.data.object;
        const checkoutSessionId = subscription.latest_invoice.checkout_session; // or subscription.metadata.checkout_session_id

        // Retrieve the checkout session object
        const checkoutSession = await stripe.checkout.sessions.retrieve(checkoutSessionId);

        const firebaseUid = checkoutSession.metadata.firebaseUid;

        if (!firebaseUid || typeof firebaseUid !== 'string' || firebaseUid.length > 128) {
          return;
        }

        const userRecord = await admin.auth().getUser(firebaseUid);

        await admin.auth().setCustomUserClaims(userRecord.uid, { subscribed: true });

        console.log(`User ${userRecord.uid} subscribed.`);
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }
  } catch (error) {
    console.error('Error handling event:', error);
  }
}
