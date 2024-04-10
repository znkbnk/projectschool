// jsLessons.js

import React, { useState } from "react";
import "../styles/lessons.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "./ProgressBar";
import { tasksData, authorsData } from "../data/tasksData";
import FilterSortButtons from "./FilterSortButtons";
import FilteredTasks from "./FilteredTasks";
import JsTitle from "./JsTitle";

function JsLessons() {
  const [showEasy, setShowEasy] = useState(false);
  const [showHard, setShowHard] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [filters, setFilters] = useState(["All", "Easy", "Hard"]);
  const numLessons = tasksData.js.length;

  const handleFilterClick = (filterType) => {
    setShowEasy(filterType === "Easy");
    setShowHard(filterType === "Hard");
  };

  const getCompletedTasksCount = () => {
    let count = 0;
    const completedTasks =
      JSON.parse(localStorage.getItem("js_completedTasks")) || {};
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
        <JsTitle />
      </div>
      <ProgressBar
        numStages={numLessons}
        completedTasks={getCompletedTasksCount()}
      />
      <FilterSortButtons
        filters={filters}
        handleFilterClick={handleFilterClick}
      />

      <div className='lessons-cards'>
        <FilteredTasks
          tasks={tasksData.js}
          completedTasksKey='js_completedTasks'
          showEasy={showEasy}
          showHard={showHard}
          getCompletedTasksCount={getCompletedTasksCount}
          getAuthorInfo={getAuthorInfo}
          lessonType='js'
        />
      </div>
      <Footer />
    </>
  );
}

export default JsLessons;
