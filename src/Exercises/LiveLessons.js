import React from "react";
import "../styles/lessons.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "./ProgressBar";
import { tasksData, authorsData } from "../data/tasksData";
import FilteredTasks from "./FilteredTasks";
import LiveTitle from "./LiveTitle";

function LiveLessons() {
  const getCompletedTasks = () => {
    const completedTasks =
      JSON.parse(localStorage.getItem("Live_completedTasks")) || {};
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
        <LiveTitle />
      </div>
      <ProgressBar
        numStages={tasksData.Live.length}
        completedTasks={getCompletedTasks()}
        taskType='Live' // Pass "Live" as taskType
      />

      <div className='lessons-cards'>
        <FilteredTasks
          tasks={tasksData.Live}
          completedTasksKey='Live_completedTasks'
          getAuthorInfo={getAuthorInfo}
          showDifficulty={false}
        />
      </div>
      <Footer />
    </>
  );
}

export default LiveLessons;
