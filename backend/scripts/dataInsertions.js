//backend/scripts/dataInsertion.js

const User = require('./models/User');

const insertSampleData = async () => {
  try {
    await User.create([
      {
        firebaseUid: 'sampleUid1',
        subscriptionStatus: 'subscribed',
        subscriptionId: 'stripe_subscription_id_1',
        subscriptionExpiry: new Date('2024-12-31')
      },
      {
        firebaseUid: 'sampleUid2',
        subscriptionStatus: 'not_subscribed'
      }
    ]);

    console.log('Sample data inserted successfully');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  }
};

insertSampleData();
