// CancelComponent.js

import React from "react";
import Navbar from "../components/Navbar";
import "../styles/success.css";
import Footer from "../components/Footer";

const Cancel = () => {
  return (
    <div>
      <Navbar />
      <div className='cancel-container'>
        <div className='cancel-card'>
          <div className='cancel-icon-container'>
            <i className='cancel-checkmark'>✘</i>
          </div>
          <h1>Declined</h1>
          <p className='success-text'>
            Your purchase request was declined. For assistance or further
            inquiries, please contact support.
            <br /> We apologize for any inconvenience
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cancel;
