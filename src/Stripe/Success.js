import React, { useEffect, useState } from "react";
import "../styles/success.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { auth } from "firebase-admin";
import axios from "axios";

const Success = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        handleSubscriptionUpdate(currentUser.uid);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSubscriptionUpdate = async (firebaseUid) => {
    try {
      await axios.post(
        "https://projectschool404-4c33494b2162.herokuapp.com/api/update-subscription",
        { firebaseUid }
      );

      console.log("Subscription status updated successfully");
    } catch (error) {
      console.error("Error updating subscription status:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='success-container'>
        <div className='success-card'>
          <div className='icon-container'>
            <i className='checkmark'>✓</i>
          </div>
          <h1>Success</h1>
          <p className='success-text'>
            We received your purchase request;
            <br /> we'll be in touch shortly!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
