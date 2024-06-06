const admin = require('firebase-admin');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Initialize Firebase Admin SDK
if (!admin.apps.length) { // Check if the app has already been initialized
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      projectId: process.env.FIREBASE_PROJECT_ID,
    });
  }
async function updateFirebaseStatus(customerId) {
  try {
    const db = admin.firestore();

    // Assuming you have a collection named 'users' where user documents are stored
    const userRef = db.collection('users').doc(customerId);

    // Update the user document to set the status to 'subscribed'
    await userRef.update({ status: 'subscribed' });

    console.log('User status updated successfully');
  } catch (error) {
    console.error('Error updating user status in Firebase:', error);
    throw new Error('Failed to update user status in Firebase');
  }
}

exports.handler = async (event) => {
  try {
    const sig = event.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    const stripeEvent = stripe.webhooks.constructEvent(event.body, sig, webhookSecret);
  
    // Handle specific event types, e.g., checkout.session.completed
    if (stripeEvent.type === 'checkout.session.completed') {
      const session = stripeEvent.data.object;
      const customerId = session.customer;
  
      // Update user status in Firebase database
      await updateFirebaseStatus(customerId);
    }
  
    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (error) {
    console.error('Error handling webhook:', error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Webhook handling failed' }),
    };
  }
};
