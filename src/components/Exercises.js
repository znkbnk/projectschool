import React from "react";
import ExercisesCardList from "./ExercisesCardList";
import ExercisesTitle from "./ExercisesTitle";
import Footer from "./Footer";
import Navbar from "./Navbar";

function ScrollToTopOnNavigation() {
  window.scrollTo(0, 0);
  return null;
}

const Exercises = () => {
  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />
      <ExercisesTitle />
      <ExercisesCardList />
      <Footer />
    </div>
  );
};

export default Exercises;
