// models/userModel.js


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firebaseUid: { type: String, required: true, unique: true },
  subscriptionStatus: { type: String, default: 'not_subscribed' },
  subscriptionId: String,
  subscriptionExpiry: Date
});

const User = mongoose.model('User', userSchema);

module.exports = User;