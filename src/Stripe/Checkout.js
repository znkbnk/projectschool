// import { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
import "../styles/checkout.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PriceCardsList from "./PriceCardsList";
import CheckoutTitle from "./CheckoutTitle";

const Checkout = () => {
  function ScrollToTopOnNavigation() {
    window.scrollTo(0, 0);
    return null;
  }
  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />
      <CheckoutTitle />
      <PriceCardsList  />
      <Footer />
    </div>
  );
};

export default Checkout;
