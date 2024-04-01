import React from "react";
import { Link } from "react-router-dom";
import LessonsCards from "./LessonsCards";

const FilteredTasks = ({
  tasks,
  completedTasksKey,
  getAuthorInfo,
  showCompleted,
  showUncompleted,
  showEasy,
  showHard,
}) => {
  // Determine if a task is available based on completion status
  const isTaskAvailable = (task) => {
    const completedTasks =
      JSON.parse(localStorage.getItem(completedTasksKey)) || {};
    const taskIndex = tasks.findIndex(
      (originalTask) => originalTask.taskId === task.taskId
    );
    return taskIndex === 0 || completedTasks[tasks[taskIndex - 1].taskId];
  };

  // Filter tasks based on the selected filters
  const filterTasks = (task) => {
    if (
      (showCompleted && task.completed) ||
      (showUncompleted && !task.completed) ||
      (showEasy && task.difficulty === "Easy") ||
      (showHard && task.difficulty === "Hard")
    ) {
      return true;
    }
    if (!showCompleted && !showUncompleted && !showEasy && !showHard) {
      return true; // Show all if no filter is applied
    }
    return false;
  };

  return (
    <>
      {tasks.map((task, index) => {
        const isAvailable = isTaskAvailable(task);
        const originalIndex = tasks.findIndex(
          (originalTask) => originalTask.taskId === task.taskId
        );
        const lessonNumber = originalIndex + 1;
        return (
          <div key={index}>
            {isAvailable && filterTasks(task) && (
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
            )}
          </div>
        );
      })}
    </>
  );
};

export default FilteredTasks;
