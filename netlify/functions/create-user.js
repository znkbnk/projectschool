const mongoose = require('mongoose');
const User = require('../../userModelbackend/models/userModel');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const handleCreateUser = async (event) => {
  const { firebaseUid, email } = JSON.parse(event.body);

  try {
    const existingUser = await User.findOne({ firebaseUid });
    if (existingUser) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*', // Add this line
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', // Add this line
        },
        body: JSON.stringify({ error: 'User already exists' }),
      };
    }

    const newUser = new User({
      firebaseUid,
      email,
      subscriptionStatus: 'not_subscribed',
    });

    await newUser.save();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Add this line
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', // Add this line
      },
      body: JSON.stringify({ message: 'User created successfully' }),
    };
  } catch (error) {
    console.error('Error creating user:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // Add this line
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', // Add this line
      },
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

exports.handler = handleCreateUser;