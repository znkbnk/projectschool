import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CardIcon from "../images/pslogosmall.png";
import ProductImage from "../images/navbarlogo.png";

import "../styles/checkout.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1OwsLT2NvwaBESkuQZJNM6eu",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <div>
      <Navbar />
      <div className='checkout'>
        <h1>Checkout</h1>
        <p className='checkout-title'>ProjectSchool</p>
        <p className='checkout-description'>
          Practice React Practice React Practice React Practice React Practice
          React{" "}
        </p>
        <h1 className='checkout-price'>£10</h1>
        <img
          className='checkout-product-image'
          src={ProductImage}
          alt='Product'
        />
        <button
          className='checkout-button'
          onClick={redirectToCheckout}
          disabled={isLoading}
        >
          <div className='grey-circle'>
            <div className='purple-circle'>
              <img className='icon' src={CardIcon} alt='credit-card-icon' />
            </div>
          </div>
          <div className='text-container'>
            <p className='text'>{isLoading ? "Loading..." : "Get Started"}</p>
          </div>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
