//stripe-webhook.js

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const admin = require('firebase-admin');

const sgMail = require('@sendgrid/mail'); 

const serviceAccountData = {
     type: 'service_account',
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-m69uf%40projectschool-48842.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  };
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountData)
  });

exports.handler = async (event, context) => {
  const sig = event.headers['stripe-signature'];
  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(event.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }

  if (stripeEvent.type === 'invoice.payment_succeeded') {
    const invoice = stripeEvent.data.object;
    const customerId = invoice.customer;

    let customer;
    try {
      customer = await stripe.customers.retrieve(customerId);
    } catch (err) {
      console.error('Error retrieving customer:', err);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to retrieve customer' }),
      };
    }

    const email = customer.email;

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' }),
      };
    }

    const msg = {
      to: email,
      from: 'zenikibeniki@gmail.com',
      subject: 'Subscription Confirmation',
      text: 'Thank you for subscribing!',
      html: '<p>Thank you for subscribing to our service!</p>',
    };

    try {
      await sgMail.send(msg);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully' }),
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to send email' }),
      };
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};
