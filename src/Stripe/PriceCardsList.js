import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import PriceCard from "./PriceCard";
import "../styles/checkout.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../components/firebase";

// Initialize Stripe with your API key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const PriceCardsList = () => {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async (priceId) => {
    if (!isTermsAccepted) {
      alert("You must agree to the terms and conditions and privacy policy before proceeding.");
      return;
    }

    try {
      const stripe = await stripePromise;
      const user = auth.currentUser;

      if (!user) {
        console.error("User not authenticated");
        return;
      }

      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
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
    <div>
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
        onButtonClick={() => handleCheckout("price_1PUY142NvwaBESkufgVpQic7")}
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
        onButtonClick={() => handleCheckout("price_1PUY3f2NvwaBESkuS8hZLwkb")}
      />
      
    </div>
    <div className="terms-links">
      <div>
      <p>By subscribing, you agree to our <a href="https://projectschool.dev/#/terms" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> and <a href="https://projectschool.dev/#/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
        
      </div>
        <label>
          <input
            type="checkbox"
            checked={isTermsAccepted}
            onChange={() => setIsTermsAccepted(!isTermsAccepted)}
          />
          I have read and agree to the <a href="https://projectschool.dev/#/terms" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> and <a href="https://projectschool.dev/#/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </label>
      </div>
    </div>
  );
};

export default PriceCardsList;
