// backend/server.js

require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/userModel");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 
const app = express();
const port = process.env.PORT || 5002;

// Allow only specific origins
const allowedOrigins = [
  "https://projectschool.dev",
  "https://www.projectschool.dev",
  "projectschool.dev",
  "http://localhost:3000",
  "http://localhost:5001",
  "http://localhost:5002",
  
];

app.use(
  cors({
      origin: function (origin, callback) {
          if (!origin || allowedOrigins.includes(origin)) {
              callback(null, true);
          } else {
              callback(new Error("Not allowed by CORS"));
          }
      },
      credentials: true,
  })
);

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(bodyParser.json());

// Define route to handle Stripe webhook events
app.post("/stripe-webhook", async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (stripeEvent.type) {
      case "checkout.session.completed":
        const checkoutSession = stripeEvent.data.object;
        const customer = await stripe.customers.retrieve(
          checkoutSession.customer
        );
        const uid = customer.metadata.firebaseUid;

        if (!uid) {
          throw new Error("Firebase UID not found in customer metadata");
        }

        // Find or create the user document
        let user = await User.findOne({ firebaseUid: uid });
        if (!user) {
          user = new User({
            firebaseUid: uid,
            subscriptionStatus: "subscribed",
            subscriptionId: checkoutSession.subscription,
            subscriptionExpiry: new Date(
              checkoutSession.current_period_end * 1000
            ),
          });
        } else {
          // Update existing user document
          user.subscriptionStatus = "subscribed";
          user.subscriptionId = checkoutSession.subscription;
          user.subscriptionExpiry = new Date(
            checkoutSession.current_period_end * 1000
          );
        }

        await user.save();

        console.log(
          `User ${uid} subscribed. Subscription status updated in the database.`
        );
        break;

      default:
        console.log(`Unhandled event type: ${stripeEvent.type}`);
    }
  } catch (error) {
    console.error("Error handling Stripe webhook event:", error);
    return res.status(500).send("Error handling webhook event");
  }

  res.status(200).send("Webhook received successfully");
});

// Endpoint to get user status
app.get("/api/user-status", async (req, res) => {
  const firebaseUid = req.query.firebaseUid;
  console.log("Received request for user status:", firebaseUid);

  if (!firebaseUid) {
    return res.status(400).json({ error: "firebaseUid query parameter is required" });
  }

  try {
    const user = await User.findOne({ firebaseUid });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const { subscriptionStatus } = user;
    res.json({ subscriptionStatus });
  } catch (error) {
    console.error("Error fetching user status:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});