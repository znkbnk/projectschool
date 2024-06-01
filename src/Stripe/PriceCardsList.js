import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import PriceCard from "./PriceCard";
import "../styles/checkout.css";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../components/firebase";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const PriceCardsList = () => {
  const navigate = useNavigate();

  const handleCheckout = async (priceId) => {
    try {
      const stripe = await stripePromise;
      stripe.redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: "subscription",
        successUrl: window.location.origin + "/#success",
        cancelUrl: window.location.origin + "/#cancel",
      }).then((result) => {
        if (result.error) {
          console.error("Error during redirect to checkout:", result.error.message);
        } else {
          console.log("Redirect to checkout successful:", result);
        }
      });
  
      // Update user status to "subscribed" in Firebase after successful checkout
      const user = auth.currentUser;
      if (user) {
        const userRef = db.collection("users").doc(user.uid);
        await userRef.update({ status: "subscribed" });
      } else {
        console.error("User not authenticated");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  
    return false; // Prevent default action of button click event
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
        onButtonClick={() => handleCheckout("price_1PLPzI2NvwaBESkufVcjyXlN")}
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
        onButtonClick={() => handleCheckout("price_1PLPzw2NvwaBESkujeXxKY4M")}
      />
    </div>
  );
};

export default PriceCardsList;
