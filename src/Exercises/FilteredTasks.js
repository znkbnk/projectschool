
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LessonsCards from "./LessonsCards";

const MobileMessage = () => (
  <div style={{ textAlign: "center", padding: "20px", fontSize: "2rem" }}>
    <h3>Please use a desktop or laptop for a better learning experience.</h3>
  </div>
);

const FilteredTasks = ({
  tasks,
  completedTasksKey,
  getAuthorInfo,
  showEasy,
  showHard,
}) => {
 const [isMobile, setIsMobile] = useState(window.innerWidth < 460);
   useEffect(() => {
     const handleResize = () => {
       setIsMobile(window.innerWidth < 460);
     };

     window.addEventListener("resize", handleResize);

     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);

   if (isMobile) {
     return <MobileMessage />;
   }

  const isTaskAvailable = (task) => {
    const completedTasks =
      JSON.parse(localStorage.getItem(completedTasksKey)) || {};
    const taskIndex = tasks.findIndex(
      (originalTask) => originalTask.taskId === task.taskId
    );

    // Check if it's the first task or the previous task is completed
    const isPreviousTaskCompleted =
      taskIndex === 0 || completedTasks[tasks[taskIndex - 1].taskId];
    console.log(`Task ${task.taskId} is available: ${isPreviousTaskCompleted}`);

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
                <LessonsCards
                  header={`Lesson ${lessonNumber}`}
                  img={task.img}
                  title={task.taskTitle}
                  authorInfo={getAuthorInfo(task.authorIndex)}
                  introduction={task.introduction}
                  difficulty={task.difficulty}
                  taskId={task.taskId}
                  completedTasksKey={completedTasksKey}
                />
              </div>
            ) : (
              // Conditionally render Link only if it's not a mobile device
              
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
                        taskId={task.taskId}
                        completedTasksKey={`${task.taskType}_completedTasks`}
                      />
                    )}
                  </div>
                </Link>
              )
            }
          </div>
        );
      })}
    </>
  );
};

export default FilteredTasks;


// import React from "react";
// import { Link } from "react-router-dom";
// import LessonsCards from "./LessonsCards";

// const FilteredTasks = ({
//   tasks,
//   completedTasksKey,
//   getAuthorInfo,
//   showEasy,
//   showHard,
// }) => {
//   const isTaskAvailable = (task) => {
//     const completedTasks =
//       JSON.parse(localStorage.getItem(completedTasksKey)) || {};
//     const taskIndex = tasks.findIndex(
//       (originalTask) => originalTask.taskId === task.taskId
//     );

//     // Check if it's the first task or the previous task is completed
//     const isPreviousTaskCompleted =
//       taskIndex === 0 || completedTasks[tasks[taskIndex - 1].taskId];
//     console.log(`Task ${task.taskId} is available: ${isPreviousTaskCompleted}`);

//     return isPreviousTaskCompleted;
//   };

//   const filterTasks = (task) => {
//     const isAvailable = isTaskAvailable(task);

//     if (
//       isAvailable &&
//       ((showEasy && task.difficulty === "Easy") ||
//         (showHard && task.difficulty === "Hard"))
//     ) {
//       return true;
//     }

//     if (!showEasy && !showHard) {
//       return isAvailable;
//     }

//     return false;
//   };

//   return (
//     <>
//       {tasks.map((task, index) => {
//         const isAvailable = isTaskAvailable(task);
//         const originalIndex = tasks.findIndex(
//           (originalTask) => originalTask.taskId === task.taskId
//         );
//         const lessonNumber = originalIndex + 1;
//         const preventEnter = !task.completed && !isAvailable;

//         return (
//           <div key={index}>
//             {preventEnter ? (
//               <div className='unavailable' style={{ filter: "blur(5px)" }}>
//                 <LessonsCards
//                   header={`Lesson ${lessonNumber}`}
//                   img={task.img}
//                   title={task.taskTitle}
//                   authorInfo={getAuthorInfo(task.authorIndex)}
//                   introduction={task.introduction}
//                   difficulty={task.difficulty}
//                   taskId={task.taskId}
//                   completedTasksKey={completedTasksKey}
//                 />
//               </div>
//             ) : (
//               <Link
//                 to={`/editor/${task.taskType}/${task.taskId}`}
//                 style={{ textDecoration: "none" }}
//               >
//                 <div>
//                   {filterTasks(task) && (
//                     <LessonsCards
//                       className={`lessons-card ${
//                         !isAvailable ? "unavailable" : ""
//                       }`}
//                       style={{ filter: !isAvailable ? "blur(5px)" : "none" }}
//                       header={`Lesson ${lessonNumber}`}
//                       img={task.img}
//                       title={task.taskTitle}
//                       authorInfo={getAuthorInfo(task.authorIndex)}
//                       introduction={task.introduction}
//                       difficulty={task.difficulty}
//                       taskId={task.taskId}
//                       completedTasksKey={`${task.taskType}_completedTasks`}
//                     />
//                   )}
//                 </div>
//               </Link>
//             )}
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default FilteredTasks;