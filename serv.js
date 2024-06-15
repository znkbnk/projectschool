// // // app.post("/stripe-webhook", async (req, res) => {
// // //     const sig = req.headers["stripe-signature"];
// // //     let stripeEvent;
  
// // //     try {
// // //       // Verify the webhook signature
// // //       stripeEvent = stripe.webhooks.constructEvent(
// // //         req.rawBody,
// // //         sig,
// // //         process.env.STRIPE_WEBHOOK_SECRET
// // //       );
// // //       console.log("Webhook event received:", stripeEvent.type);
// // //     } catch (err) {
// // //       console.error("Webhook signature verification failed:", err.message);
// // //       return res.status(400).send(`Webhook Error: ${err.message}`);
// // //     }
  
// // //     // Handle specific webhook event types
// // //     if (stripeEvent.type === "checkout.session.completed") {
// // //       const checkoutSession = stripeEvent.data.object;
  
// // //       try {
// // //         // Retrieve the customer details from Stripe
// // //         const customer = await stripe.customers.retrieve(
// // //           checkoutSession.customer
// // //         );
// // //         const uid = customer.metadata.firebaseUid;
  
// // //         if (!uid) {
// // //           console.error("Firebase UID not found in customer metadata");
// // //           return res
// // //             .status(400)
// // //             .send("Firebase UID not found in customer metadata");
// // //         }
  
// // //         // Find the existing user by firebaseUid
// // //         const user = await User.findOne({ firebaseUid: uid });
  
// // //         if (user) {
// // //           // Update the existing user's subscription status
// // //           user.subscriptionStatus = "subscribed";
// // //           user.subscriptionId = checkoutSession.subscription;
  
// // //           // Save the updated user document
// // //           await user.save();
// // //           console.log(
// // //             `User ${uid} subscribed. Subscription status updated in the database.`
// // //           );
// // //           return res.status(200).send("Webhook received successfully");
// // //         } else {
// // //           console.error(
// // //             `User not found for UID: ${uid}. User may not have been created during signup.`
// // //           );
// // //           return res
// // //             .status(400)
// // //             .send(
// // //               `User not found for UID: ${uid}. User may not have been created during signup.`
// // //             );
// // //         }
// // //       } catch (error) {
// // //         console.error("Error handling Stripe webhook event:", error);
// // //         return res.status(500).send("Error handling webhook event");
// // //       }
// // //     } else {
// // //       console.log(`Unhandled event type: ${stripeEvent.type}`);
// // //       return res.status(200).send("Webhook received successfully");
// // //     }
// // //   });

// // -----------------------------------------------------------------------
// working webhook:

// //backend/routes/webhook.js




// const express = require("express");
// const router = express.Router();
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const User = require("../models/userModel");

// // Middleware to use raw body for webhook endpoint
// router.post("/", (req, res) => {
//   const sig = req.headers["stripe-signature"];
//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(req.rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
//   } catch (err) {
//     console.error("Error verifying Stripe webhook signature:", err);
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   if (event.type === "checkout.session.completed") {
//     const session = event.data.object;
//     const { client_reference_id, subscription } = session;

//     User.findOneAndUpdate(
//       { firebaseUid: client_reference_id },
//       { subscriptionStatus: "subscribed", subscriptionId: subscription },
//       { new: true }
//     )
//     .then(user => {
//       if (!user) {
//         console.error("User not found in database");
//         return res.status(404).send("User not found");
//       }

//       console.log("User subscription updated:", user);
//       res.status(200).send("Subscription updated");
//     })
//     .catch(error => {
//       console.error("Error updating subscription:", error);
//       res.status(500).send("Internal Server Error");
//     });
//   } else {
//     res.status(400).send("Event type not supported");
//   }
// });

// module.exports = router;
