import React from "react";
import { Link } from "react-router-dom";

const FilteredTasks = ({
  tasks,
  completedTasksKey,
  getAuthorInfo,
  showEasy,
  showHard,
  showCompleted,
  showNotCompleted,
  showDifficulty,
}) => {
  // Get the list of completed tasks from local storage
  const completedTasks =
    JSON.parse(localStorage.getItem(completedTasksKey)) || {};

  // Filter tasks based on difficulty and completion status
  const filteredTasks = tasks.filter((task) => {
    const isCompleted = completedTasks[task.taskId]; // Check if the task is completed

    if (showEasy && task.difficulty === "Easy") return true;
    if (showHard && task.difficulty === "Hard") return true;
    if (showCompleted && isCompleted) return true;
    if (showNotCompleted && !isCompleted) return true;
    if (!showEasy && !showHard && !showCompleted && !showNotCompleted) return true; // Show all tasks if no filter is selected
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
          <Link
            key={index}
            to={`/editor/${task.taskType}/${task.taskId}`}
            style={{ textDecoration: "none" }}
          >
            <div className="lessons-card">
              <h3>{`Lesson ${lessonNumber}`}</h3>
              <img src={task.img} alt={task.taskTitle} />
              <div className="lessons-card-body">
                <h3>{task.taskTitle}</h3>
                <p>{task.introduction}</p>
                <div className="authorDifficulty">
                  <h5>
                    Author: {getAuthorInfo(task.authorIndex).name.first}{" "}
                    {getAuthorInfo(task.authorIndex).name.last}
                  </h5>
                  {showDifficulty && <h5>Difficulty: {task.difficulty}</h5>}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default FilteredTasks;

