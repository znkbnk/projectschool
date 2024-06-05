import React, { useState, useEffect } from "react";
import "../styles/success.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { auth, db } from "../components/firebase";

const Success = () => {
  const [userStatus, setUserStatus] = useState("");

  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await db.collection("users").doc(user.uid).get();
          if (userDoc.exists) {
            const userData = userDoc.data();
            setUserStatus(userData.status || "Unknown");
          } else {
            setUserStatus("Unknown");
          }
        } else {
          setUserStatus("Unknown");
        }
      } catch (error) {
        console.error("Error fetching user status:", error);
        setUserStatus("Unknown");
      }
    };

    fetchUserStatus();
  }, []);

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
          <p className='user-status'>Your subscription status: {userStatus}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
