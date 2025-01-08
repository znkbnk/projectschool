import React from "react";
import ExercisesCard from "./ExercisesCard";
import { workshopListData } from "../data/workshopListData";
import "../styles/exercises.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WorkshopListTitle from "./WorkshopListTitle";

const WorkshopList = () => {
  function ScrollToTopOnNavigation() {
    window.scrollTo(0, 0);
    return null;
  }
  return (
    <div>
      <ScrollToTopOnNavigation />

      <Navbar />
      <WorkshopListTitle />

      <div className='wrapper'>
        {workshopListData.map((exercise, index) => (
          <ExercisesCard
            key={index}
            img={exercise.img}
            title={exercise.title}
            desc={exercise.desc}
            to={exercise.to}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default WorkshopList;
