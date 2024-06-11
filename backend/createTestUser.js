require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/userModel');

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

  const testUser = new User({
    firebaseUid: '37fyGIQCACOsqGxJtU9jdB2W4nm1',
    subscriptionStatus: 'subscribed',
    subscriptionId: 'test_subscription_id',
    subscriptionExpiry: new Date('2024-12-31') // Set an appropriate expiry date
  });

  testUser.save()
  .then(() => {
    console.log('Test user created successfully');
    mongoose.disconnect(); // Close the MongoDB connection
  })
  .catch((err) => {
    console.error('Error creating test user:', err);
    mongoose.disconnect(); // Close the MongoDB connection
  });