import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import PriceCard from "./PriceCard";
import "../styles/checkout.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../components/firebase";

// Initialize Stripe with your API key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const PriceCardsList = () => {
  const navigate = useNavigate();

  const handleCheckout = async (priceId) => {
    try {
      const stripe = await stripePromise;
      const user = auth.currentUser;

      if (!user) {
        console.error("User not authenticated");
        return;
      }

      const lineItems = [{ price: priceId, quantity: 1 }];

      const { error } = await stripe.redirectToCheckout({
        lineItems,
        mode: "subscription",
        clientReferenceId: user.uid, // Pass Firebase UID
        successUrl: `${window.location.origin}/#success`,
        cancelUrl: `${window.location.origin}/#cancel`,
      });

      if (error) {
        console.error("Error during redirect to checkout:", error.message);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const handleFreeButtonClick = () => {
    navigate("/signup");
  };

  return (
    <div className='price-cards-container'>
      <PriceCard
        title='Free'
        price='0'
        advantages={[
          "Access to all course materials.",
          "Receive 5 or more new tasks every month.",
          "Access to 24/7 free support.",
          "Solutions provided for each task.",
          "Access to a private Discord forum server.",
        ]}
        buttonText='Get started'
        trialDays=''
        onButtonClick={handleFreeButtonClick}
      />
      <PriceCard
        title='Monthly'
        price='5'
        advantages={[
          "Access to all course materials.",
          "Receive 5 or more new tasks every month.",
          "Access to 24/7 free support.",
          "Solutions provided for each task.",
          "Access to a private Discord forum server.",
        ]}
        buttonText='Get started'
        trialDays=''
        onButtonClick={() => handleCheckout("price_1PMza52NvwaBESku2hHPRWQW")}
      />
      <PriceCard
        title='Annual'
        price='50'
        advantages={[
          "Access to all course materials.",
          "Receive 5 or more new tasks every month.",
          "Access to 24/7 free support.",
          "Solutions provided for each task.",
          "Access to a private Discord forum server.",
        ]}
        buttonText='Get started'
        trialDays=''
        onButtonClick={() => handleCheckout("price_1PMzab2NvwaBESkuTJ0jL6F4")}
      />
    </div>
  );
};

export default PriceCardsList;
