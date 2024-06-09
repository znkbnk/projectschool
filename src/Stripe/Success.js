import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Success = ({ location }) => {
  const [userStatus, setUserStatus] = useState("Loading");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        // Add console.log to inspect the location object
        console.log("Location object:", location);

        const searchParams = location.search;
        if (!searchParams) {
          console.error("Search params not found in the URL");
          return;
        }

        const firebaseUid = new URLSearchParams(searchParams).get("firebaseUid");
        if (!firebaseUid) {
          throw new Error("Firebase UID not found in the URL");
        }

        const response = await axios.get(`/api/user-status?firebaseUid=${firebaseUid}`);
        const { subscriptionStatus } = response.data;
        setUserStatus(subscriptionStatus === "subscribed" ? "Subscribed" : "Not Subscribed");
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
            <p className="error-text">
              An error occurred: {error}
            </p>
          ) : (
            <>
              <p className="success-text">
                We received your purchase request;
                <br /> we'll be in touch shortly!
              </p>
              <p className="user-status">Your subscription status: {userStatus}</p>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;