import React, { useState, useMemo, useEffect } from "react";
import "../styles/lessons.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "./ProgressBar";
import { tasksData, authorsData } from "../data/tasksData";
import FilterSortButtons from "./FilterSortButtons";
import FilteredTasks from "./FilteredTasks";
import ReactTitle from "./ReactTitle";
import MobileMessage from "./MobileMessage";

function ReactLessons() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile-sized
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkIsMobile(); // Check on mount
    window.addEventListener("resize", checkIsMobile); // Check on resize

    return () => {
      window.removeEventListener("resize", checkIsMobile); // Cleanup
    };
  }, []);

  // Fetch completed tasks from localStorage
  const completedTasks = useMemo(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem("React_completedTasks")) || {};
      return Object.keys(storedTasks).filter((taskId) => storedTasks[taskId]);
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return [];
    }
  }, []);

  // If mobile, show the MobileMessage component
  if (isMobile) {
    return <MobileMessage />;
  }

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
  };

  const filteredTasks = tasksData.React.filter((task) => {
    if (activeFilter === "Easy") return task.difficulty === "Easy";
    if (activeFilter === "Hard") return task.difficulty === "Hard";
    if (activeFilter === "Completed") return completedTasks.includes(task.id);
    if (activeFilter === "Not Completed") return !completedTasks.includes(task.id);
    return true; // "All" filter
  });

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
        completedTasks={completedTasks}
        taskType="React"
      />
      <FilterSortButtons
        filters={["All", "Easy", "Hard", "Completed", "Not Completed"]}
        handleFilterClick={handleFilterClick}
      />
      <div className="lessons-cards">
        <FilteredTasks
          tasks={filteredTasks}
          getAuthorInfo={getAuthorInfo}
          showDifficulty={true}
        />
      </div>
      <Footer />
    </>
  );
}

export default ReactLessons;