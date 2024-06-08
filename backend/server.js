//backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Import Mongoose
require('dotenv').config(); // Load environment variables from .env file
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('./models/User'); // Assuming you have a User model

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());

// Define route to handle Stripe webhook events
app.post('/stripe-webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (stripeEvent.type) {
      case 'checkout.session.completed':
        const checkoutSession = stripeEvent.data.object;
        const customer = await stripe.customers.retrieve(checkoutSession.customer);
        const uid = customer.metadata.firebaseUid;

        // Update the user's subscription status in the database
        await User.findOneAndUpdate(
          { uid },
          { subscriptionStatus: 'subscribed', subscriptionId: checkoutSession.subscription, subscriptionExpiry: new Date(checkoutSession.current_period_end * 1000) },
          { new: true }
        );

        console.log(`User ${uid} subscribed. Subscription status updated in the database.`);
        break;

      // Add other webhook event handlers as needed

      default:
        console.log(`Unhandled event type: ${stripeEvent.type}`);
    }
  } catch (error) {
    console.error('Error handling Stripe webhook event:', error);
    return res.status(500).send('Error handling webhook event');
  }

  res.status(200).send('Webhook received successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
