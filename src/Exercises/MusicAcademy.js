import React from "react";
import "../styles/lessons.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "./ProgressBar";
import { tasksData, authorsData } from "../data/tasksData";
import FilteredTasks from "./FilteredTasks";
import MusicAcademyTitle from "./MusicAcademyTitle";

function MusicAcademy() {
  const getCompletedTasks = () => {
    const completedTasks =
      JSON.parse(localStorage.getItem("Workshop_completedTasks")) || {};
    return Object.keys(completedTasks).filter(
      (taskId) => completedTasks[taskId]
    );
  };

  const getAuthorInfo = (authorIndex) => {
    return authorsData[authorIndex];
  };

  return (
    <>
      <Navbar />
      <div className='header'>
        <MusicAcademyTitle />
      </div>
      <ProgressBar
        numStages={tasksData.Workshop.length}
        completedTasks={getCompletedTasks()}
        taskType='Workshop' 
      />

      <div className='lessons-cards'>
        <FilteredTasks
          tasks={tasksData.Workshop}
          completedTasksKey='Workshop_completedTasks'
          getAuthorInfo={getAuthorInfo}
          showDifficulty={false}
        />
      </div>
      <Footer />
    </>
  );
}

export default MusicAcademy;
