import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Success = ({ location }) => {
  const [userStatus, setUserStatus] = useState("Loading");

  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const firebaseUid = new URLSearchParams(location.search).get("firebaseUid");
        const response = await axios.get(`/api/user-status?firebaseUid=${firebaseUid}`);
        const { subscriptionStatus } = response.data;
        setUserStatus(subscriptionStatus === "subscribed" ? "Subscribed" : "Not Subscribed");
      } catch (error) {
        console.error("Error fetching user status:", error);
        setUserStatus("Error");
      }
    };

    fetchUserStatus();
  }, [location.search]);

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
