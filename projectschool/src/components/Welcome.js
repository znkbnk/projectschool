import React from "react";
import Section1 from "./Section1";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ScrollToTopOnNavigation() {
  window.scrollTo(0, 0);
  return null;
}


const Welcome = () => {
  return (
    <div>
      <ScrollToTopOnNavigation />

      <Navbar />
      <Section1 />
      <Footer />
    </div>
  );
};

export default Welcome;
