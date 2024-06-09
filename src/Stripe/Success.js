import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Success = () => {
  const [userStatus, setUserStatus] = useState("Loading");
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const firebaseUid = searchParams.get("firebaseUid");

        if (!firebaseUid) {
          throw new Error("Firebase UID not found in the URL");
        }

        const response = await axios.get(
          `http://localhost:5002/api/user-status?firebaseUid=${firebaseUid}`
        );
        const { subscriptionStatus } = response.data;
        setUserStatus(
          subscriptionStatus === "subscribed" ? "Subscribed" : "Not Subscribed"
        );
      } catch (error) {
        console.error("Error fetching user status:", error);
        setError(error.message);
      }
    };

    fetchUserStatus();
  }, [location]);

  return (
    <div>
      <Navbar />
      <div className="success-container">
        <div className="success-card">
          <div className="icon-container">
            <i className="checkmark">✓</i>
          </div>
          <h1>Success</h1>
          {error ? (
            <p className="error-text">An error occurred: {error}</p>
          ) : (
            <>
              <p className="success-text">
                We received your purchase request;
                <br /> we'll be in touch shortly!
              </p>
              <p className="user-status">
                Your subscription status: {userStatus}
              </p>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
