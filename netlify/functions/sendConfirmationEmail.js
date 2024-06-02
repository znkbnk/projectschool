// functions/sendConfirmationEmail.js

import { setApiKey, send } from '@sendgrid/mail';

setApiKey(process.env.SENDGRID_API_KEY);

export async function handler(event, context) {
  const { email } = JSON.parse(event.body);

  const msg = {
    to: email,
    from: 'zenikibeniki@gmail.com',
    subject: 'Subscription Confirmation',
    text: 'Thank you for subscribing!',
    html: '<p>Thank you for subscribing to our service!</p>',
  };

  try {
    await send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
}