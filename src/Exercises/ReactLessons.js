import React, { useState } from "react";
import "../styles/lessons.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "./ProgressBar";
import { tasksData, authorsData } from "../data/tasksData";
import FilterSortButtons from "./FilterSortButtons";
import FilteredTasks from "./FilteredTasks";
import ReactTitle from "./ReactTitle";

function ReactLessons() {
  const [showEasy, setShowEasy] = useState(false);
  const [showHard, setShowHard] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showNotCompleted, setShowNotCompleted] = useState(false);
  const [filters, setFilters] = useState([
    "All",
    "Easy",
    "Hard",
    "Completed",
    "Not Completed",
  ]);

  const handleFilterClick = (filterType) => {
    // Update the filters state and show/hide conditions based on the clicked filter
    if (filterType === "Easy") {
      setFilters(["Easy"]);
      setShowEasy(true);
      setShowHard(false);
      setShowCompleted(false);
      setShowNotCompleted(false);
    } else if (filterType === "Hard") {
      setFilters(["Hard"]);
      setShowHard(true);
      setShowEasy(false);
      setShowCompleted(false);
      setShowNotCompleted(false);
    } else if (filterType === "Completed") {
      setFilters(["Completed"]);
      setShowCompleted(true);
      setShowNotCompleted(false);
      setShowEasy(false);
      setShowHard(false);
    } else if (filterType === "Not Completed") {
      setFilters(["Not Completed"]);
      setShowNotCompleted(true);
      setShowCompleted(false);
      setShowEasy(false);
      setShowHard(false);
    } else {
      setFilters(["All"]);
      setShowEasy(false);
      setShowHard(false);
      setShowCompleted(false);
      setShowNotCompleted(false);
    }
  };

  const getCompletedTasks = () => {
    const completedTasks =
      JSON.parse(localStorage.getItem("React_completedTasks")) || {};
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
      <div className="header">
        <ReactTitle />
      </div>
      <ProgressBar
        numStages={tasksData.React.length}
        completedTasks={getCompletedTasks()}
        taskType="React" // Pass "React" as taskType
      />
      <FilterSortButtons
        filters={filters}
        handleFilterClick={handleFilterClick}
      />

      <div className="lessons-cards">
        <FilteredTasks
          tasks={tasksData.React}
          completedTasksKey="React_completedTasks"
          showEasy={showEasy}
          showHard={showHard}
          showCompleted={showCompleted}
          showNotCompleted={showNotCompleted}
          getAuthorInfo={getAuthorInfo}
          showDifficulty={true} // Show difficulty
        />
      </div>
      <Footer />
    </>
  );
}

export default ReactLessons;
