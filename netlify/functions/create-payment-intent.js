// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// exports.handler = async (event, context) => {
//     console.log("Request received:", event);

//     const sig = event.headers['stripe-signature'];
//     let stripeEvent;

//     try {
//         stripeEvent = stripe.webhooks.constructEvent(event.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
//     } catch (err) {
//         console.error('Webhook Error:', err.message);
//         return {
//             statusCode: 400,
//             body: `Webhook Error: ${err.message}`,
//         };
//     }

//     console.log("Stripe Event:", stripeEvent); // Add this line to see the parsed Stripe event


//     const { paymentMethodId } = JSON.parse(event.body);
//     const origin = process.env.URL;

//     try {
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: 999, // Amount in cents
//             currency: 'gbp',
//             payment_method: paymentMethodId,
//             confirm: true,
//             automatic_payment_methods: {
//                 enabled: true,
//                 allow_redirects: 'always',
//             },
//             return_url: `${origin}/#success`,
//         });

//         return {
//             statusCode: 200,
//             body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
//         };
//     } catch (error) {
//         return {
//             statusCode: 500,
//             body: JSON.stringify({ error: error.message }),
//         };
//     }
// };