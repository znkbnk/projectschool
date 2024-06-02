// // confirmation-email.js

// import fetch from "node-fetch";

// export async function handler(event, context) {
//   const payload = JSON.parse(event.body);
//   console.log("Received webhook payload:", payload); // Log the payload

//   const { type } = payload;

//   console.log("Received webhook event:", type);

//   if (type === "checkout.session.completed") {
//     const session = payload.data.object;

//     if (session.mode === "subscription" && session.payment_status === "paid") {
//       const customerEmail = session.customer_details.email;
//       const customerName = session.customer_details.name || "Valued Customer";
//       const subscriptionPlan = session.lines.data[0].price.product.name;
//       const subscriptionPrice = session.lines.data[0].price.unit_amount / 100;
//       const subscriptionDuration = session.lines.data[0].price.recurring.interval;

//       console.log("Subscription details:", {
//         customerEmail,
//         customerName,
//         subscriptionPlan,
//         subscriptionPrice,
//         subscriptionDuration,
//       });

//       // Send confirmation email using SendGrid
//       const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
//       const SENDGRID_TEMPLATE_ID = process.env.SENDGRID_TEMPLATE_ID;

//       const emailParams = {
//         personalizations: [
//           {
//             to: [{ email: customerEmail, name: customerName }],
//             dynamic_template_data: {
//               subject: "Thank you for subscribing!",
//               customer_name: customerName,
//               subscription_plan: subscriptionPlan,
//               subscription_price: `$${subscriptionPrice}`,
//               subscription_duration: subscriptionDuration,
//             },
//           },
//         ],
//         from: { email: "zenikibeniki@gmail.com", name: "www.projectschool.dev" },
//         template_id: SENDGRID_TEMPLATE_ID,
//       };

//       try {
//         const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${SENDGRID_API_KEY}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(emailParams),
//         });

//         if (!response.ok) {
//           throw new Error(`SendGrid API error: ${response.statusText}`);
//         }

//         console.log("Confirmation email sent successfully");
//       } catch (error) {
//         console.error("Error sending confirmation email:", error);
//         return {
//           statusCode: 500,
//           body: JSON.stringify({ error: error.message }),
//         };
//       }
//     }
//   }

//   return {
//     statusCode: 200,
//     body: JSON.stringify({ received: true }),
//   };
// }
