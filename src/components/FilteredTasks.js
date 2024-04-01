import React from "react";
import { Link } from "react-router-dom";
import LessonsCards from "./LessonsCards";

const FilteredTasks = ({
  tasks,
  completedTasksKey,
  getAuthorInfo,
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

  const filterTasks = (task) => {
    const isAvailable = isTaskAvailable(task);

    if (
      isAvailable &&
      ((showEasy && task.difficulty === "Easy") ||
        (showHard && task.difficulty === "Hard"))
    ) {
      return true;
    }

    if (!showEasy && !showHard) {
      return isAvailable; // Return true only if the task is available
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
        const preventEnter = !task.completed && !isAvailable;

        return (
          <div key={index}>
            {preventEnter ? (
              <div className='unavailable' style={{ filter: "blur(5px)" }}>
                <LessonsCards
                  header={`Lesson ${lessonNumber}`}
                  img={task.img}
                  title={task.taskTitle}
                  authorInfo={getAuthorInfo(task.authorIndex)}
                  introduction={task.introduction}
                  difficulty={task.difficulty}
                />
              </div>
            ) : (
              <Link
                to={`/editor/${task.taskType}/${task.taskId}`}
                style={{ textDecoration: "none" }}
              >
                <div>
                  {filterTasks(task) && (
                    <LessonsCards
                      className={`lessons-card ${
                        !isAvailable ? "unavailable" : ""
                      }`}
                      style={{ filter: !isAvailable ? "blur(5px)" : "none" }}
                      header={`Lesson ${lessonNumber}`}
                      img={task.img}
                      title={task.taskTitle}
                      authorInfo={getAuthorInfo(task.authorIndex)}
                      introduction={task.introduction}
                      difficulty={task.difficulty}
                    />
                  )}
                </div>
              </Link>
            )}
          </div>
        );
      })}
    </>
  );
};

export default FilteredTasks;
