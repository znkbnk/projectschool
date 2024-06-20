// // backend/routes/webhook.js

// const express = require("express");
// const router = express.Router();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const User = require("../models/userModel");
// const { sendEmailConfirmation, sendSubscriptionExpirationNotification } = require("../email");

// // Middleware to use raw body for webhook endpoint
// router.post("/", (req, res) => {
//   const sig = req.headers["stripe-signature"];
//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       req.rawBody,
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (err) {
//     console.error("Error verifying Stripe webhook signature:", err);
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   switch (event.type) {
//     case "checkout.session.completed":
//       handleCheckoutSessionCompleted(event.data.object);
//       break;
//     case "customer.subscription.deleted":
//       handleSubscriptionDeleted(event.data.object);
//       break;
//     case "invoice.payment_failed":
//       handleInvoicePaymentFailed(event.data.object);
//       break;
//     // Handle other events as needed
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   res.status(200).send("Webhook received");
// });

// async function handleCheckoutSessionCompleted(session) {
//   const { client_reference_id, subscription } = session;

//   try {
//     const user = await User.findOneAndUpdate(
//       { firebaseUid: client_reference_id },
//       { subscriptionStatus: "subscribed", subscriptionId: subscription.id },
//       { new: true }
//     );

//     if (!user) {
//       console.error("User not found in database");
//       return;
//     }

//     console.log("User subscription updated:", user);

//     // Send email confirmation
//     await sendEmailConfirmation(user.email);
//   } catch (error) {
//     console.error("Error updating subscription or sending email:", error);
//   }
// }

// async function handleSubscriptionDeleted(subscription) {
//   const { client_reference_id } = subscription;

//   try {
//     const user = await User.findOneAndUpdate(
//       { firebaseUid: client_reference_id },
//       { subscriptionStatus: "not_subscribed", subscriptionId: null },
//       { new: true }
//     );

//     if (!user) {
//       console.error("User not found in database");
//       return;
//     }

//     console.log("User subscription status updated:", user);
//   } catch (error) {
//     console.error("Error updating subscription status:", error);
//   }
// }

// async function handleInvoicePaymentFailed(invoice) {
//   const { customer, subscription } = invoice;

//   try {
//     const user = await User.findOneAndUpdate(
//       { stripeCustomerId: customer },
//       { subscriptionStatus: "not_subscribed", subscriptionId: null },
//       { new: true }
//     );

//     if (!user) {
//       console.error("User not found in database");
//       return;
//     }

//     console.log("User subscription status updated after payment failure:", user);

//     // Send notification email to the user
//     await sendSubscriptionExpirationNotification(user.email);
//   } catch (error) {
//     console.error("Error updating subscription status or sending notification:", error);
//   }
// }

// module.exports = router;