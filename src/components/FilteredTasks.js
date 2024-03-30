// FilteredTasks.js

import React from "react";
import HtmlLessonsCards from "./LessonsCards";
import { Link } from "react-router-dom";

const FilteredTasks = ({
  tasks,
  completedTasksKey,
  showCompleted,
  showUncompleted,
  showEasy,
  showHard,
  getAuthorInfo,
  lessonType, // Add lessonType prop
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
            {/* Render your task component here */}
            <Link
              to={`/editor/${task.taskType}/${task.taskId}`}
              style={{ textDecoration: "none" }}
            >
              <HtmlLessonsCards
                header={`Lesson ${lessonNumber}`}
                img={task.img} // Use the img URL from task data
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
