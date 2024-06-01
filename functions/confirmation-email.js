const axios = require('axios');

exports.handler = async (event) => {
  const payload = JSON.parse(event.body);
  const { type } = payload;

  console.log("Received webhook event:", type);

  if (type === "checkout.session.completed") {
    const session = payload.data.object;

    if (session.mode === "subscription" && session.payment_status === "paid") {
      const customerEmail = session.customer_details.email;
      const customerName = session.customer_details.name || "Valued Customer";
      const subscriptionPlan = session.lines.data[0].price.product.name;
      const subscriptionPrice = session.lines.data[0].price.unit_amount / 100;
      const subscriptionDuration = session.lines.data[0].price.recurring.interval;

      console.log("Subscription details:", {
        customerEmail,
        customerName,
        subscriptionPlan,
        subscriptionPrice,
        subscriptionDuration,
      });

      const sendgridApiKey = process.env.SENDGRID_API_KEY;

      const emailData = {
        personalizations: [
          {
            to: [
              {
                email: customerEmail,
                name: customerName
              }
            ],
            subject: "Subscription Confirmation"
          }
        ],
        from: {
          email: "your_email@example.com",
          name: "Your App Name"
        },
        content: [
          {
            type: "text/plain",
            value: `Dear ${customerName},\n\nThank you for subscribing to ${subscriptionPlan}!\n\nPrice: $${subscriptionPrice}\nDuration: ${subscriptionDuration}\n\nBest regards,\nYour App Team`
          }
        ]
      };

      try {
        const response = await axios.post('https://api.sendgrid.com/v3/mail/send', emailData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sendgridApiKey}`
          }
        });
        console.log("Confirmation email sent successfully", response.data);
      } catch (error) {
        console.error("Error sending confirmation email:", error);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
      }
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
};
