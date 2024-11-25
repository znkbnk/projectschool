import React from "react";
import InterviewTitle from "./InterviewTitle";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InterviewCardList from "./InterviewCardList";

function ScrollToTopOnNavigation() {
  window.scrollTo(0, 0);
  return null;
}

const Exercises = () => {
  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />
      <InterviewTitle />
      <InterviewCardList />
      <Footer />
    </div>
  );
};

export default Exercises;
