import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PriceCard from "./PriceCard";
import "../styles/checkout.css";
import { auth } from "../components/firebase";

// Lazy load Stripe only when needed
const PriceCardsList = () => {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [stripe, setStripe] = useState(null);
  const navigate = useNavigate();

  // Dynamically import Stripe only when the component is loaded
  useEffect(() => {
    const loadStripe = async () => {
      const { loadStripe } = await import("@stripe/stripe-js");
      const stripeInstance = await loadStripe(process.env.REACT_APP_STRIPE_KEY);
      setStripe(stripeInstance);
    };

    loadStripe();
  }, []);

  const handleCheckout = async (priceId) => {
    if (!isTermsAccepted) {
      toast.error("Please accept the terms and conditions to proceed.");
      return;
    }

    try {
      if (!stripe) {
        toast.error("Stripe is not yet loaded. Please try again.");
        return;
      }

      const user = auth.currentUser;
      if (!user) {
        toast.error("Please log in to proceed with checkout.");
        navigate("/login"); // Redirect to login page if user isn't authenticated
        return;
      }

      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: "subscription",
        clientReferenceId: user.uid,
        successUrl: `${window.location.origin}/#success`,
        cancelUrl: `${window.location.origin}/#cancel`,
      });

      if (error) {
        toast.error("There was an error with the checkout. Please try again.");
        console.error("Error Message:", error.message);
      } else {
        toast.success("Redirecting to checkout...");
      }
    } catch (error) {
      toast.error("Checkout process failed. Please try again.");
      console.error("Checkout Error:", error);
    }
  };

  const handleFreeButtonClick = () => {
    const user = auth.currentUser;
    if (user) {
      navigate("/exercises");
    } else {
      navigate("/signup");
    }
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
          price='14.99'
          advantages={[
            "Access to all course materials.",
            "Receive 5 or more new tasks every month.",
            "Access to 24/7 free support.",
            "Solutions provided for each task.",
            "Access to a private Discord forum server.",
            "Support free education.",
          ]}
          buttonText='Get started'
          trialDays=''
          onButtonClick={() => handleCheckout("price_1Pwqdd2NvwaBESkuxTiU3ozx")}
        />
        <PriceCard
          title='Annual'
          price='100'
          advantages={[
            "Access to all course materials.",
            "Receive 5 or more new tasks every month.",
            "Access to 24/7 free support.",
            "Solutions provided for each task.",
            "Access to a private Discord forum server.",
            "Support free education.",
          ]}
          buttonText='Get started'
          trialDays=''
          onButtonClick={() => handleCheckout("price_1PwqmY2NvwaBESkuFDHCkFbd")}
        />
      </div>
      <div className='terms-links'>
        <label>
          <input
            className="terms-input"
            type='checkbox'
            checked={isTermsAccepted}
            onChange={() => setIsTermsAccepted(!isTermsAccepted)}
          />
          I have read and agree to the{" "}
          <a
            className="touch-target"
            href='https://projectschool.dev/#/terms'
            target='_blank'
            rel='noopener noreferrer'
          >
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a
            className="touch-target"
            href='https://projectschool.dev/#/privacy'
            target='_blank'
            rel='noopener noreferrer'
          >
            Privacy Policy
          </a>
        </label>
      </div>
    </div>
  );
};

export default PriceCardsList;
