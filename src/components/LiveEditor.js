import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import tasksData from "./tasksData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/editor.css";
import "react-toastify/dist/ReactToastify.css";

const LiveEditor = () => {
  const { lessonType, taskId } = useParams();

  const [isCompleted, setIsCompleted] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  let task = null;

  useEffect(() => {
    if (lessonType && tasksData[lessonType]) {
      const index = tasksData[lessonType].findIndex(
        (task) => task.taskId === taskId
      );
      setCurrentTaskIndex(index);
    }
  }, [lessonType, taskId]);

  if (lessonType && tasksData[lessonType]) {
    task = tasksData[lessonType].find((task) => task.taskId === taskId);
  }

  const taskText = task ? task.taskText : "";

 const handleNext = () => {
   if (currentTaskIndex < tasksData[lessonType].length - 1) {
     if (!isCompleted) {
       // Display a toast notification
       toast.warn("Please complete the current task first.");
     } else {
       const nextTaskId = tasksData[lessonType][currentTaskIndex + 1].taskId;
       window.location.href = `/editor/${lessonType}/${nextTaskId}`;
     }
   }
 };

 const handlePrevious = () => {
   if (currentTaskIndex > 0) {
     const previousTaskId = tasksData[lessonType][currentTaskIndex - 1].taskId;
     window.location.href = `/editor/${lessonType}/${previousTaskId}`;
   } else {
     // Display a toast notification indicating that it's the first task
     toast.info("You are on the first task.");
   }
 };

  const handleComplete = () => {
    const taskIndex = tasksData[lessonType].findIndex(
      (task) => task.taskId === taskId
    );

    if (taskIndex !== -1) {
      const updatedTasksData = { ...tasksData };
      updatedTasksData[lessonType][taskIndex].completed = true;

      console.log(`Task ${taskId} marked as completed.`);
      toast.success(`Lesson ${lessonType} is completed!`);
      setIsCompleted(true);
    } else {
      console.log(`Task ${taskId} not found.`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='editor-container'>
        <div className='task-container'>
          <div className='task'>
            <div className='text-window'>
              {lessonType ? (
                <p>
                  This is {lessonType} lesson: {taskText}
                </p>
              ) : (
                <p>Start Practicing...</p>
              )}
            </div>
          </div>
          <div className='task-buttons'>
            <button
              className='button-28 previous' // Add class 'previous' for the previous button
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className='button-28 complete' // Add class 'complete' for the complete button
              onClick={handleComplete}
              style={{
                backgroundColor: isCompleted ? "#4efd54" : "",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              disabled={isCompleted}
            >
              {isCompleted ? "Completed" : "Complete"}
            </button>
            <button
              className='button-28 next' // Add class 'next' for the next button
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
        <iframe
          src={`https://codesandbox.io/embed/jhw9jl?view=Editor+%2B+Preview&module=%2Fsrc%2Fapp.tsx&hidenavigation=1&task=${taskId}`}
          title='React'
          allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
          sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
        ></iframe>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default LiveEditor;
