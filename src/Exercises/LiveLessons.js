import React, { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/lessons.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "./ProgressBar";
import { tasksData, authorsData } from "../data/tasksData";
import FilterSortButtons from "./FilterSortButtons";
import FilteredTasks from "./FilteredTasks";
import LiveTitle from "./LiveTitle";
import MobileMessage from "./MobileMessage";

function LiveLessons() {
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
      const storedTasks = JSON.parse(localStorage.getItem("Live_completedTasks")) || {};
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

  const tasks = tasksData.Live || [];

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "Easy") return task.difficulty === "Easy";
    if (activeFilter === "Hard") return task.difficulty === "Hard";
    if (activeFilter === "Completed") return completedTasks.includes(task.id);
    if (activeFilter === "Not Completed") return !completedTasks.includes(task.id);
    return true; // "All" filter
  });

  const getAuthorInfo = (authorIndex) => {
    return authorsData[authorIndex] || { name: "Unknown Author", bio: "No information available." };
  };

  return (
    <>
      <Navbar />
      <main className="header">
        <LiveTitle />
      </main>
      <ProgressBar
        numStages={tasks.length}
        completedTasks={completedTasks}
        taskType="Live"
      />
      <FilterSortButtons
        filters={["All", "Easy", "Hard", "Completed", "Not Completed"]}
        handleFilterClick={handleFilterClick}
      />
      <div className="lessons-cards">
        <FilteredTasks
          tasks={filteredTasks}
          getAuthorInfo={getAuthorInfo}
          showDifficulty={false}
        />
      </div>
      <Footer />
    </>
  );
}

LiveLessons.propTypes = {
  tasksData: PropTypes.shape({
    Live: PropTypes.arrayOf(PropTypes.object),
  }),
  authorsData: PropTypes.arrayOf(PropTypes.object),
};

export default LiveLessons;