import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/lessons.css";
import ReactCards from "./ReactLessonsCards";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProgressBar from "./ProgressBar";
import { tasksData, authorsData } from "./tasksData";
import FilterSortButtons from "./FilterSortButtons";

function ReactLessons() {
  const [showEasy, setShowEasy] = useState(false);
  const [showHard, setShowHard] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showUncompleted, setShowUncompleted] = useState(false);
  const [completedTasks, setCompletedTasks] = useState({});
   const [filters, setFilters] = useState([
     "All",
     "Easy",
     "Hard",
     "Completed",
     "Uncompleted",
   ]);

  useEffect(() => {
    const storedCompletedTasks =
      JSON.parse(localStorage.getItem("completedTasks")) || {};
    setCompletedTasks(storedCompletedTasks);
  }, []);

  const handleFilterClick = (filterType) => {
    setShowEasy(filterType === "easy");
    setShowHard(filterType === "hard");
    setShowCompleted(filterType === "completed");
    setShowUncompleted(filterType === "uncompleted");
  };

  const getCompletedTasksCount = () => {
    return Object.values(completedTasks).filter((task) => task).length;
  };

  const getAuthorInfo = (authorIndex) => {
    return authorsData[authorIndex];
  };



  const filteredReactTasks = tasksData.React.filter((task) => {
    if (showCompleted && completedTasks[task.taskId]) return true;
    if (showUncompleted && !completedTasks[task.taskId]) return true;
    if (showEasy && task.difficulty === "Easy") return true;
    if (showHard && task.difficulty === "Hard") return true;
    if (!showEasy && !showHard && !showCompleted && !showUncompleted)
      return true;
    return false;
  });

  return (
    <>
      <Navbar />
      <div className='header'>
        <h1>React Lessons</h1>
      </div>
      <ProgressBar
        numStages={tasksData.React.length}
        completedTasks={getCompletedTasksCount()}
      />
      <FilterSortButtons
        filters={filters}
        handleFilterClick={handleFilterClick}
      />

      <div className='lessons-cards'>
        {filteredReactTasks.map((task, index) => {
          const originalIndex = tasksData.React.findIndex(
            (originalTask) => originalTask.taskId === task.taskId
          );
          const lessonNumber = originalIndex + 1;
          return (
            <Link
              to={`/editor/React/${task.taskId}`}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <ReactCards
                header={`Lesson ${lessonNumber}`}
                img='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
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

export default ReactLessons;
