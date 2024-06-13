require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/userModel");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 
const app = express();
const port = 5002;

// Allow only specific origins
const allowedOrigins = [  
  'https://projectschool.dev',
  "https://www.projectschool.dev",
  "http://localhost:3000",
  "http://localhost:5001",
  "http://localhost:5002",
  "https://projectschool404.herokuapp.com"
];

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Origin: ", origin);
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Blocked by CORS");
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/stripe-webhook', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    console.log('Webhook event received:', stripeEvent.type);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (stripeEvent.type === 'checkout.session.completed') {
    const checkoutSession = stripeEvent.data.object;

    try {
      const customer = await stripe.customers.retrieve(checkoutSession.customer);
      const uid = customer.metadata.firebaseUid;

      if (!uid) {
        console.error('Firebase UID not found in customer metadata');
        return res.status(400).send('Firebase UID not found in customer metadata');
      }

      // Find the existing user by firebaseUid
      const user = await User.findOne({ firebaseUid: uid });

      if (user) {
        // Update the existing user's subscription status
        user.subscriptionStatus = 'subscribed';
        user.subscriptionId = checkoutSession.subscription;

        // Save the updated user document
        await user.save();
        console.log(`User ${uid} subscribed. Subscription status updated in the database.`);
        return res.status(200).send('Webhook received successfully');
      } else {
        console.error(`User not found for UID: ${uid}. User may not have been created during signup.`);
        // Handle this case according to your requirements
        // For example, you can log the error and continue without creating a new user
        return res.status(400).send(`User not found for UID: ${uid}. User may not have been created during signup.`);
      }
    } catch (error) {
      console.error('Error handling Stripe webhook event:', error);
      return res.status(500).send('Error handling webhook event');
    }
  } else {
    console.log(`Unhandled event type: ${stripeEvent.type}`);
    return res.status(200).send('Webhook received successfully');
  }
});

app.get("/api/user-status", async (req, res) => {
  const firebaseUid = req.query.firebaseUid;
  console.log("Received request for user status:", firebaseUid);

  if (!firebaseUid) {
    return res.status(400).json({ error: "firebaseUid query parameter is required" });
  }

  try {
    let user = await User.findOne({ firebaseUid });
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

app.post('/create-checkout-session', async (req, res) => {
  const { priceId, firebaseUid, customerEmail } = req.body;
  
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${req.headers.origin}/#success?firebaseUid=${firebaseUid}`,
      cancel_url: `${req.headers.origin}/#cancel`,
      customer_email: customerEmail,
      metadata: {
        firebaseUid,
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/create-user', async (req, res) => {
  const { firebaseUid, email } = req.body;

  try {
    const existingUser = await User.findOne({ firebaseUid });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = new User({
      firebaseUid,
      email,
      subscriptionStatus: 'not_subscribed', // Set the initial subscription status
    });

    await newUser.save();

    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});