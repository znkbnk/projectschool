import React, { useState, useEffect } from "react";
import "../styles/success.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { auth } from "../components/firebase";

const Success = () => {
  const [userStatus, setUserStatus] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Assuming 'subscribed' is a boolean field in the user's custom claims
        const userStatus = user.subscribed ? "Subscribed" : "Not Subscribed";
        setUserStatus(userStatus);
      } else {
        setUserStatus("Unknown");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="success-container">
        <div className="success-card">
          <div className="icon-container">
            <i className="checkmark">✓</i>
          </div>
          <h1>Success</h1>
          <p className="success-text">
            We received your purchase request;
            <br /> we'll be in touch shortly!
          </p>
          <p className="user-status">Your subscription status: {userStatus}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
