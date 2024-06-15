import React, {  useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Success = () => {
  const [error, setError] = useState(null);


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
              
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;