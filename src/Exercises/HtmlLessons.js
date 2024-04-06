// HtmlLessons.js

import React, { useState } from "react";
import "../styles/lessons.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "./ProgressBar";
import { tasksData, authorsData } from "../components/tasksData";
import FilterSortButtons from "./FilterSortButtons";
import FilteredTasks from "./FilteredTasks";

function HtmlLessons() {
  const [showEasy, setShowEasy] = useState(false);
  const [showHard, setShowHard] = useState(false);

  const [filters, setFilters] = useState(["All", "Easy", "Hard"]);
  const numLessons = tasksData.HTML.length;

  const handleFilterClick = (filterType) => {
    setShowEasy(filterType === "Easy");
    setShowHard(filterType === "Hard");
  };

  const getCompletedTasksCount = () => {
    let count = 0;
    const completedTasks =
      JSON.parse(localStorage.getItem("HTML_completedTasks")) || {};
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
        <h1>HTML Lessons</h1>
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
          tasks={tasksData.HTML}
          completedTasksKey='HTML_completedTasks'
          showEasy={showEasy}
          showHard={showHard}
          getCompletedTasksCount={getCompletedTasksCount}
          getAuthorInfo={getAuthorInfo}
          lessonType='HTML'
        />
      </div>
      <Footer />
    </>
  );
}

export default HtmlLessons;
