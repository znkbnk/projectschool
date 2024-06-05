import React, { useEffect, useState } from "react";

const LessonsCards = ({
  header,
  img,
  title,
  authorInfo,
  introduction,
  difficulty,
  taskId,
  completedTasksKey, 
}) => {
  const { name } = authorInfo;
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const completedTasks =
      JSON.parse(localStorage.getItem(completedTasksKey)) || {};
    setIsCompleted(completedTasks[taskId] || false);
  }, [taskId, completedTasksKey]); 

  return (
    <div>
      <div className='lessons-card'>
        <h3>
          {header} {isCompleted ? " ✅" : " ⚙️"}
        </h3>
        <img src={img} alt={title} />
        <div className='lessons-card-body'>
          <h3>{title}</h3>
          <p>{introduction}</p>
          <div className='authorDifficulty'>
            <h5>
              Author: {name.first} {name.last}
            </h5>
            <h5>Difficulty: {difficulty}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonsCards;
