// SuccessComponent.js

import React from "react";
import "../styles/success.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Success = () => {


  
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
