// CheckoutForm.js
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { firestore } from './firebaseConfig';

const CheckoutForm = ({ userId, setStatus }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        } 

        const card = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.error(error);
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
        });

        const paymentIntent = await response.json();

        if (paymentIntent.error) {
            console.error(paymentIntent.error);
            return; 
        } 

        const { error: confirmError } = await stripe.confirmCardPayment(paymentIntent.client_secret);

        if (confirmError) {
            console.error(confirmError);
            return;
        }

        await firestore.collection('users').doc(userId).set({ status: 'subscribed' });
        setStatus('subscribed');
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>Subscribe</button>
        </form>
    );
};

export default CheckoutForm;
