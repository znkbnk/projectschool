// // functions/stripe-webhook.js
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const admin = require('firebase-admin');
// const serviceAccount = require('./projectschool-48842.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const firestore = admin.firestore();

// exports.handler = async (event, context) => {
//   const sig = event.headers['stripe-signature'];
//   let stripeEvent;

//   try {
//     stripeEvent = stripe.webhooks.constructEvent(event.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
//   } catch (err) {
//     return {
//       statusCode: 400,
//       body: `Webhook Error: ${err.message}`,
//     };
//   }

//   if (stripeEvent.type === 'payment_intent.succeeded') {
//     const paymentIntent = stripeEvent.data.object;
//     const userId = paymentIntent.metadata.userId;

//     try {
//       await firestore.collection('users').doc(userId).update({ status: 'subscribed' });
//     } catch (error) {
//       console.error('Error updating user status:', error);
//       return {
//         statusCode: 500,
//         body: JSON.stringify({ error: 'Error updating user status' }),
//       };
//     }
//   }

//   return {
//     statusCode: 200,
//     body: JSON.stringify({ received: true }),
//   };
// };
