// FilteredTasks.js

import React from "react";
import { Link } from "react-router-dom";
import LessonsCards from "./LessonsCards";

const FilteredTasks = ({
  tasks,
  completedTasksKey,
  showCompleted,
  showUncompleted,
  showEasy,
  showHard,
  getAuthorInfo,
}) => {
  const filteredTasks = tasks.filter((task) => {
    const completedTasks =
      JSON.parse(localStorage.getItem(completedTasksKey)) || {};
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
      {filteredTasks.map((task, index) => {
        const originalIndex = tasks.findIndex(
          (originalTask) => originalTask.taskId === task.taskId
        );
        const lessonNumber = originalIndex + 1;
        return (
          <div key={index}>
           
            <Link
              to={`/editor/${task.taskType}/${task.taskId}`}
              style={{ textDecoration: "none" }}
            >
              <LessonsCards
                header={`Lesson ${lessonNumber}`}
                img={task.img} 
                title={task.taskTitle}
                authorInfo={getAuthorInfo(task.authorIndex)}
                introduction={task.introduction}
                difficulty={task.difficulty}
              />
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default FilteredTasks;
