import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/lessons.css";
import CssCards from "./CssLessonsCards";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProgressBar from "./ProgressBar";
import { tasksData, authorsData } from "./tasksData";
import FilterSortButtons from "./FilterSortButtons";

function CssLessons() {
  const [showEasy, setShowEasy] = useState(false);
  const [showHard, setShowHard] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showUncompleted, setShowUncompleted] = useState(false);
   const [filters, setFilters] = useState([
     "All",
     "Easy",
     "Hard",
     "Completed",
     "Uncompleted",
   ]);

  const numLessons = tasksData.CSS.length;

  const getCompletedTasksCount = () => {
    let count = 0;
    const completedTasks =
      JSON.parse(localStorage.getItem("CSS_completedTasks")) || {}; // Update key to CSS_completedTasks
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

    const handleFilterClick = (filterType) => {
      setShowEasy(filterType === "Easy");
      setShowHard(filterType === "Hard");
      setShowCompleted(filterType === "Completed");
      setShowUncompleted(filterType === "Uncompleted");
    };

  const filteredCssTasks = tasksData.CSS.filter((task) => {
    const completedTasks =
      JSON.parse(localStorage.getItem("CSS_completedTasks")) || {}; 
    if (showCompleted && completedTasks[task.taskId]) {
      return true;
    }
    if (showUncompleted && !completedTasks[task.taskId]) {
      return true;
    }
    if (showEasy && task.difficulty === "Easy") {
      return true;
    }
    if (showHard && task.difficulty === "Hard") {
      return true;
    }
    if (!showEasy && !showHard && !showCompleted && !showUncompleted) {
      return true;
    }
    return false;
  });

  return (
    <>
      <Navbar />
      <div className='header'>
        <h1>CSS Lessons</h1>
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
        {filteredCssTasks.map((task, index) => {
          // Find the original index of the task in tasksData.CSS
          const originalIndex = tasksData.CSS.findIndex(
            (originalTask) => originalTask.taskId === task.taskId
          );
          // Calculate the lesson number based on the original index
          const lessonNumber = originalIndex + 1;
          return (
            <Link
              to={`/editor/CSS/${task.taskId}`}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <CssCards
                header={`Lesson ${lessonNumber}`} // Use the calculated lesson number
                img='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817'
                title={task.taskTitle}
                authorInfo={getAuthorInfo(task.authorIndex)}
                introduction={task.introduction}
                difficulty={task.difficulty}
              />
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default CssLessons;
