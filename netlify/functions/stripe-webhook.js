// Import the required modules using CommonJS syntax
const Stripe = require('stripe');
const firebase = require('firebase/app');
require('firebase/auth');
const faunadb = require('faunadb');

// Initialize Stripe with the secret key
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// FaunaDB client and query module
const q = faunadb.query;

// Load Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
if (!firebase.apps || !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// Stripe webhook secret for verification
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Initialize FaunaDB client
const faunaClient = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

exports.handler = async (event, context) => {
  // Verify the webhook signature
  const signature = event.headers['stripe-signature'];
  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      signature,
      webhookSecret
    );
  } catch (err) {
    console.error('Error verifying Stripe webhook signature:', err);
    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }

  // Handle the event
  switch (stripeEvent.type) {
    case 'customer.subscription.updated': {
      const subscription = stripeEvent.data.object;
      const customerId = subscription.customer;
      const subscriptionStatus = subscription.status;

      try {
        // Check if the event has already been processed
        const idempotencyKey = stripeEvent.id;
        const eventProcessed = await checkEventProcessed(idempotencyKey);

        if (eventProcessed) {
          console.log(`Event with idempotency key ${idempotencyKey} has already been processed`);
          return {
            statusCode: 200,
            body: JSON.stringify({ received: true, message: 'Event already processed' }),
          };
        }

        // Update the user's subscription status in Firebase Authentication
        const user = await firebase.auth().getUserByProviderId(`stripe_customer:${customerId}`);
        if (user) {
          await firebase.auth().updateUser(user.uid, { subscribed: subscriptionStatus === 'active' });
          console.log(`User ${user.uid} subscription status updated to ${subscriptionStatus === 'active'}`);
        } else {
          console.error(`User not found for customer ID ${customerId}`);
        }

        // Mark the event as processed
        await markEventProcessed(idempotencyKey);
      } catch (err) {
        console.error('Error processing Stripe webhook event:', err);
        return {
          statusCode: 500,
          body: `Webhook Error: ${err.message}`,
        };
      }
      break;
    }
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${stripeEvent.type}`);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};

// Helper function to check if an event has already been processed
const checkEventProcessed = async (idempotencyKey) => {
  try {
    const result = await faunaClient.query(
      q.Exists(q.Match(q.Index('processed_events_by_key'), idempotencyKey))
    );
    return result;
  } catch (err) {
    console.error('Error checking event processed status:', err);
    throw err;
  }
};

// Helper function to mark an event as processed
const markEventProcessed = async (idempotencyKey) => {
  try {
    await faunaClient.query(
      q.Create(q.Collection('processed_events'), {
        data: { idempotencyKey },
      })
    );
  } catch (err) {
    console.error('Error marking event as processed:', err);
    throw err;
  }
};
