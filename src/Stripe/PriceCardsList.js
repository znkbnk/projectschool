import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import PriceCard from "./PriceCard";
import "../styles/checkout.css";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../components/firebase";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const PriceCardsList = () => {
  const navigate = useNavigate();

  const sendConfirmationEmail = async (email) => {
    try {
      const response = await fetch('/.netlify/functions/sendConfirmationEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        throw new Error('Failed to send confirmation email');
      }
    } catch (error) {
      console.error('Error sending confirmation email:', error);
    }
  };

  const handleCheckout = async (priceId) => {
    try {
      const user = auth.currentUser;
      if (!user) {
        console.error("User not authenticated");
        return; // Exit function if user is not authenticated
      }
      
      console.log("User authenticated:", user);
  
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: "subscription",
        successUrl: window.location.origin + "/success",
        cancelUrl: window.location.origin + "/cancel",
      });
  
      if (error) {
        throw new Error(error.message);
      }
  
      // Update user status to "subscribed" and send confirmation email only after successful checkout
      const userRef = db.collection("users").doc(user.uid);
      await userRef.update({ status: "subscribed" });
      await sendConfirmationEmail(user.email);
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const handleFreeButtonClick = () => {
    navigate("/signup");
  };

  return (
    <div className="price-cards-container">
      <PriceCard
        title="Free"
        price="0"
        advantages={[
          "Access to all course materials.",
          "Receive 5 or more new tasks every month.",
          "Access to 24/7 free support.",
          "Solutions provided for each task.",
          "Access to a private Discord forum server.",
        ]}
        buttonText="Get started"
        trialDays=""
        onButtonClick={handleFreeButtonClick}
      />
      <PriceCard
        title="Monthly"
        price="5"
        advantages={[
          "Access to all course materials.",
          "Receive 5 or more new tasks every month.",
          "Access to 24/7 free support.",
          "Solutions provided for each task.",
          "Access to a private Discord forum server.",
        ]}
        buttonText="Get started"
        trialDays=""
        onButtonClick={() => handleCheckout("price_1PMza52NvwaBESku2hHPRWQW")}
      />
      <PriceCard
        title="Annual"
        price="50"
        advantages={[
          "Access to all course materials.",
          "Receive 5 or more new tasks every month.",
          "Access to 24/7 free support.",
          "Solutions provided for each task.",
          "Access to a private Discord forum server.",
        ]}
        buttonText="Get started"
        trialDays=""
        onButtonClick={() => handleCheckout("price_1PMzab2NvwaBESkuTJ0jL6F4")}
      />
    </div>
  );
};

export default PriceCardsList;
