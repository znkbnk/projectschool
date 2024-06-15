import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import PriceCard from "./PriceCard";
import "../styles/checkout.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../components/firebase";
import axios from "axios";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const PriceCardsList = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
const [subscriptionStatus, setSubscriptionStatus] = useState(false);
// eslint-disable-next-line no-unused-vars
const [subscriptionId, setSubscriptionId] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        fetchSubscriptionDetails(user.uid);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const fetchSubscriptionDetails = async (firebaseUid) => {
    try {
      const response = await axios.get(
        `https://projectschool404-4c33494b2162.herokuapp.com/api/subscription-details?firebaseUid=${firebaseUid}`
      );
      const { subscriptionStatus, subscriptionId } = response.data;
      setSubscriptionStatus(subscriptionStatus);
      setSubscriptionId(subscriptionId);
    } catch (error) {
      console.error("Error fetching subscription details:", error);
    }
  };

  const handleCheckout = async (priceId) => {
    try {
      if (!user) {
        console.error("User not authenticated");
        return;
      }

      const stripe = await stripePromise;

      if (!stripe) {
        console.error("Stripe.js library not loaded yet");
        return;
      }

      const response = await fetch(
        `https://projectschool404-4c33494b2162.herokuapp.com/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            priceId,
            firebaseUid: user.uid,
            customerEmail: user.email,
          }),
          credentials: 'include',
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const session = await response.json();

      // Redirect the user to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
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
