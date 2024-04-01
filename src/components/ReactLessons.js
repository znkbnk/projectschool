import React, { useState } from "react";
import "../styles/lessons.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProgressBar from "./ProgressBar";
import { tasksData, authorsData } from "./tasksData";
import FilterSortButtons from "./FilterSortButtons";
import FilteredTasks from "./FilteredTasks";

function ReactLessons() {
  const [showEasy, setShowEasy] = useState(false);
  const [showHard, setShowHard] = useState(false);

  const [filters, setFilters] = useState(["All", "Easy", "Hard"]);
  const numLessons = tasksData.React.length;

  const handleFilterClick = (filterType) => {
    setShowEasy(filterType === "Easy");
    setShowHard(filterType === "Hard");
  };

  const getCompletedTasksCount = () => {
    let count = 0;
    const completedTasks =
      JSON.parse(localStorage.getItem("React_completedTasks")) || {};
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
        <h1>React Lessons</h1>
      </div>
      <ProgressBar
        numStages={numLessons}
        completedTasks={getCompletedTasksCount({ lessonType: "React" })}
      />
      <FilterSortButtons
        filters={filters}
        handleFilterClick={handleFilterClick}
      />

      <div className='lessons-cards'>
        <FilteredTasks
          tasks={tasksData.React}
          completedTasksKey='CSS_completedTasks'
          showEasy={showEasy}
          showHard={showHard}
          getCompletedTasksCount={getCompletedTasksCount}
          getAuthorInfo={getAuthorInfo}
        />
      </div>
      <Footer />
    </>
  );
}

export default ReactLessons;
