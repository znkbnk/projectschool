// import { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
import "../styles/checkout.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PriceCardsList from "./PriceCardsList";
import CheckoutTitle from "./CheckoutTitle";

// let stripePromise;

// const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
//   }

//   return stripePromise;
// };

const Checkout = () => {
  // const [stripeError, setStripeError] = useState(null);
  // const [isLoading, setLoading] = useState(false);
  // const item = {
  //   price: "price_1PLPzw2NvwaBESkujeXxKY4M",
  //   quantity: 1,
  // };

  // const checkoutOptions = {
  //   lineItems: [item],
  //   mode: "payment",
  //   successUrl: `${window.location.origin}/success`,
  //   cancelUrl: `${window.location.origin}/cancel`,
  // };

  // const redirectToCheckout = async () => {
  //   setLoading(true);
  //   console.log("redirectToCheckout");

  //   const stripe = await getStripe();
  //   const { error } = await stripe.redirectToCheckout(checkoutOptions);
  //   console.log("Stripe checkout error", error);

  //   if (error) setStripeError(error.message);
  //   setLoading(false);
  // };

  // if (stripeError) alert(stripeError);

  return (
    <div>
      <Navbar />
      <CheckoutTitle />
      <PriceCardsList  />
      <Footer />
    </div>
  );
};

export default Checkout;
