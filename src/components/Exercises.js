import React from "react";
import ExercisesCardList from "./ExercisesCardList";
import ExercisesTitle from "./ExercisesTitle";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Exercises = () => {
  return (
    <div>
        <Navbar />
      <ExercisesTitle />
      <ExercisesCardList />
      <Footer />
    </div>
  );
};

export default Exercises;
