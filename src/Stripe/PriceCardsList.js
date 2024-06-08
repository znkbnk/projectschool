//PriceCardList.js

import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import PriceCard from "./PriceCard";
import "../styles/checkout.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../components/firebase";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const PriceCardsList = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleCheckout = async (priceId) => {
    try {
      if (!user) {
        console.error("User not authenticated");
        return; // Exit function if user is not authenticated
      }
  
      const stripe = await stripePromise;
  
      if (!stripe) {
        console.error("Stripe.js library not loaded yet");
        return; // Exit function if Stripe is not loaded
      }
  
      // Include the firebaseUid in the success and cancel URLs
      const successUrl = `${window.location.origin}/#success?firebaseUid=${user.uid}`;
      const cancelUrl = `${window.location.origin}/#cancel?firebaseUid=${user.uid}`;
  
      // Redirect the user to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: "subscription",
        successUrl,
        cancelUrl,
        customerEmail: user.email, // Use the authenticated user's email
      });
  
      if (error) {
        throw new Error(error.message);
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
