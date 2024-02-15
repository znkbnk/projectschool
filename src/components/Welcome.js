import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Welcome = () => {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
};

export default Welcome;
