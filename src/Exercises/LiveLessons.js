import React from "react";
import "../styles/lessons.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "./ProgressBar";
import { tasksData, authorsData } from "../data/tasksData";
import FilteredTasks from "./FilteredTasks";
import LiveTitle from "./LiveTitle";

function LiveLessons() {
  // eslint-disable-next-line no-unused-vars
  const numLessons = tasksData.Live.length;

  const getCompletedTasksCount = () => {
    let count = 0;
    const completedTasks =
      JSON.parse(localStorage.getItem("Live_completedTasks")) || {};
    for (const taskId in completedTasks) {
      if (completedTasks[taskId]) {
        count++;
      }
    }
    return count;
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
        numStages={numLessons}
        completedTasks={getCompletedTasksCount({ lessonType: "Live" })}
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
