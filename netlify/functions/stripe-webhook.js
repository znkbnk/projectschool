const Stripe = require('stripe');
const firebase = require('firebase/app');
require('firebase/auth');

// Initialize Stripe with the secret key
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

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
        // Update the user's subscription status in Firebase Authentication
        const auth = firebase.auth();
        const user = await auth.getUserByProviderId(`stripe_customer:${customerId}`);
        if (user) {
          await auth.updateUser(user.uid, { subscribed: subscriptionStatus === 'active' });
          console.log(`User ${user.uid} subscription status updated to ${subscriptionStatus === 'active'}`);
        } else {
          console.error(`User not found for customer ID ${customerId}`);
        }
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