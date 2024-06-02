import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import PriceCard from './PriceCard';
import '../styles/checkout.css';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../components/firebase';
import sendConfirmationEmail from '../../netlify/functions/sendConfirmationEmail';

// Initialize Stripe with your API key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const PriceCardsList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loadSendConfirmationEmail = async () => {
      try {
        await import('../../netlify/functions/sendConfirmationEmail');
      } catch (error) {
        console.error('Failed to load sendConfirmationEmail:', error);
      }
    };

    loadSendConfirmationEmail();
  }, []);

  // Function to handle checkout process
  const handleCheckout = async (priceId) => {
    try {
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: 'subscription',
        successUrl: `${window.location.origin}/#success`,
        cancelUrl: `${window.location.origin}/#cancel`,
      });

      if (error) {
        console.error('Error during redirect to checkout:', error.message);
      } else {
        console.log('Redirect to checkout successful');
        const user = auth.currentUser;
        if (user) {
          const userRef = db.collection('users').doc(user.uid);
          await userRef.update({ status: 'subscribed' });

          // Send confirmation email
          if (sendConfirmationEmail) {
            await sendConfirmationEmail({ body: JSON.stringify({ email: user.email }) });
          } else {
            console.error('sendConfirmationEmail function not loaded');
          }
        } else {
          console.error('User not authenticated');
        }
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  const handleFreeButtonClick = () => {
    navigate('/signup');
  };

  return (
    <div className="price-cards-container">
      <PriceCard
        title="Free"
        price="0"
        advantages={[
          'Access to all course materials.',
          'Receive 5 or more new tasks every month.',
          'Access to 24/7 free support.',
          'Solutions provided for each task.',
          'Access to a private Discord forum server.',
        ]}
        buttonText="Get started"
        trialDays=""
        onButtonClick={handleFreeButtonClick}
      />
      <PriceCard
        title="Monthly"
        price="5"
        advantages={[
          'Access to all course materials.',
          'Receive 5 or more new tasks every month.',
          'Access to 24/7 free support.',
          'Solutions provided for each task.',
          'Access to a private Discord forum server.',
        ]}
        buttonText="Get started"
        trialDays=""
        onButtonClick={() => handleCheckout('price_1PMza52NvwaBESku2hHPRWQW')}
      />
      <PriceCard
        title="Annual"
        price="50"
        advantages={[
          'Access to all course materials.',
          'Receive 5 or more new tasks every month.',
          'Access to 24/7 free support.',
          'Solutions provided for each task.',
          'Access to a private Discord forum server.',
        ]}
        buttonText="Get started"
        trialDays=""
        onButtonClick={() => handleCheckout('price_1PMzab2NvwaBESkuTJ0jL6F4')}
      />
    </div>
  );
};

export default PriceCardsList;
