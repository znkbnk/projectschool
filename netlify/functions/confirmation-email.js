import { init, send } from '@emailjs/browser';

// Initialize EmailJS
init(process.env.EMAILJS_PUBLIC_KEY);

export async function handler(event, context) {
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

      // Send confirmation email using EmailJS
      const serviceID = process.env.EMAILJS_SERVICE_ID;
      const templateID = process.env.EMAILJS_TEMPLATE_ID;

      const emailParams = {
        to_email: customerEmail,
        from_name: "Your App Name",
        to_name: customerName,
        message: "Thank you for subscribing!",
        subscription_plan: subscriptionPlan,
        subscription_price: `$${subscriptionPrice}`,
        subscription_duration: subscriptionDuration,
      };

      try {
        await send(serviceID, templateID, emailParams);
        console.log("Confirmation email sent successfully");
      } catch (error) {
        console.error("Error sending confirmation email:", error);
        return {
          statusCode: 500,
          body: JSON.stringify({ error: error.message }),
        };
      }
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true }),
  };
}
