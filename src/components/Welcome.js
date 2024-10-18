import React from "react";
import Section1 from "./Section1";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useAuth from "../Login/useAuth";

function ScrollToTopOnNavigation() {
  window.scrollTo(0, 0);
  return null;
}


const Welcome = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />
      <Section1 isLoggedIn={isLoggedIn} />
      <Footer />
    </div>
  );
};

export default Welcome;
