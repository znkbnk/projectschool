const sgMail = require('@sendgrid/mail');

export async function handler(event, context) {
  // Set the SendGrid API key from the environment variable
  sgMail.setApiKey(context.clientContext.SENDGRID_API_KEY);
  const { email } = JSON.parse(event.body);

  const msg = {
    to: email,
    from: 'zenikibeniki@gmail.com',
    subject: 'Subscription Confirmation',
    text: 'Thank you for subscribing!',
    html: '<p>Thank you for subscribing to our service!</p>',
  };

  try {
    await sgMail.send(msg); // Use sgMail.send instead of send
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
