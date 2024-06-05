// functions/create-payment-intent.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
    const { paymentMethodId } = JSON.parse(event.body);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 999, // Amount in cents
            currency: 'gbp',
            payment_method: paymentMethodId,
            confirm: true,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
