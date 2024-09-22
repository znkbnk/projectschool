import React from "react";
import { Link } from "react-router-dom";

const FilteredTasks = ({
  tasks,
  completedTasksKey,
  getAuthorInfo,
  showEasy,
  showHard,
  showDifficulty,
}) => {
  const isTaskAvailable = (task) => {
    const completedTasks =
      JSON.parse(localStorage.getItem(completedTasksKey)) || {};
    const taskIndex = tasks.findIndex(
      (originalTask) => originalTask.taskId === task.taskId
    );

    const isPreviousTaskCompleted =
      taskIndex === 0 || completedTasks[tasks[taskIndex - 1].taskId];

    return isPreviousTaskCompleted;
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
      return isAvailable;
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
                <div className='lessons-card'>
                  <h3>{`Lesson ${lessonNumber}`}</h3>
                  <img src={task.img} alt={task.taskTitle} />
                  <div className='lessons-card-body'>
                    <h3>{task.taskTitle}</h3>
                    <p>{task.introduction}</p>
                    <div className='authorDifficulty'>
                      <h5>
                        Author: {getAuthorInfo(task.authorIndex).name.first} {getAuthorInfo(task.authorIndex).name.last}
                      </h5>
                      {showDifficulty && <h5>Difficulty: {task.difficulty}</h5>}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to={`/editor/${task.taskType}/${task.taskId}`}
                style={{ textDecoration: "none" }}
              >
                <div>
                  {filterTasks(task) && (
                    <div
                      className={`lessons-card ${!isAvailable ? "unavailable" : ""}`}
                      style={{ filter: !isAvailable ? "blur(5px)" : "none" }}
                    >
                      <h3>{`Lesson ${lessonNumber}`}</h3>
                      <img src={task.img} alt={task.taskTitle} />
                      <div className='lessons-card-body'>
                        <h3>{task.taskTitle}</h3>
                        <p>{task.introduction}</p>
                        <div className='authorDifficulty'>
                          <h5>
                            Author: {getAuthorInfo(task.authorIndex).name.first} {getAuthorInfo(task.authorIndex).name.last}
                          </h5>
                          {showDifficulty && <h5>Difficulty: {task.difficulty}</h5>}
                        </div>
                      </div>
                    </div>
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
