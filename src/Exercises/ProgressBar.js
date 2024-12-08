import React from "react";
import "../styles/progressBar.css";
import { tasksData } from "../data/tasksData";

const ProgressBar = ({ numStages, completedTasks, taskType }) => {
  const renderStages = () => {
    return Array.from({ length: numStages }).map((_, i) => {
      const task = tasksData[taskType][i]; // Dynamically access the taskType (React or Live)
      const isCompleted = completedTasks.includes(task.taskId); // Check completion status

      return (
        <div
          key={i}
          className={`stage ${isCompleted ? "completed" : ""}`}
        >
          {i + 1}
        </div>
      );
    });
  };

  return (
    <div className="progress-bar">
      <div className="stages">{renderStages()}</div>
    </div>
  );
};

export default ProgressBar;
