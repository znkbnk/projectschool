// ProgressBar.js

import React, { useRef } from "react";
import "../styles/progressBar.css";

const ProgressBar = ({ numStages, completedTasks }) => {
  const stagesRef = useRef(null);

  const renderStages = () => {
    let stageArray = [];
    for (let i = 0; i < numStages; i++) {
      stageArray.push(
        <div
          key={i}
          className={`stage ${i < completedTasks ? "completed" : ""}`}
        >
          {i + 1}
        </div>
      );
    }
    return stageArray;
  };

  return (
    <div className='progress-bar'>
      <div ref={stagesRef} className='stages'>
        {renderStages()}
      </div>
    </div>
  );
};

export default ProgressBar;
