import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import tasksData from "./tasksData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProgressBar from "./ProgressBar"; // Import ProgressBar component
import "../styles/editor.css";
import "react-toastify/dist/ReactToastify.css";

const LiveEditor = () => {
  const { lessonType, taskId } = useParams();

  const [isCompleted, setIsCompleted] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [completedTasksCount, setCompletedTasksCount] = useState(0); // Track completed tasks count

  let task = null;

  useEffect(() => {
    if (lessonType && tasksData[lessonType]) {
      const index = tasksData[lessonType].findIndex(
        (task) => task.taskId === taskId
      );
      setCurrentTaskIndex(index);

      // Check if the task is completed from localStorage
      const completedTasks =
        JSON.parse(localStorage.getItem("completedTasks")) || {};
      setIsCompleted(completedTasks[taskId] || false);

      // Count completed tasks
      let count = 0;
      for (const taskId in completedTasks) {
        if (completedTasks[taskId]) {
          count++;
        }
      }
      setCompletedTasksCount(count);
    }
  }, [lessonType, taskId]);

  if (lessonType && tasksData[lessonType]) {
    task = tasksData[lessonType].find((task) => task.taskId === taskId);
  }

  const taskText = task ? task.taskText : "";

  const handleNext = () => {
    if (currentTaskIndex < tasksData[lessonType].length - 1) {
      if (!isCompleted) {
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
      toast.info("You are on the first task.");
    }
  };

  const handleComplete = () => {
    const taskIndex = tasksData[lessonType].findIndex(
      (task) => task.taskId === taskId
    );

    if (taskIndex !== -1) {
      const updatedTasksData = { ...tasksData };
      updatedTasksData[lessonType][taskIndex].completed = !isCompleted; // Toggle completion status

      // Toggle completion status in localStorage
      const completedTasks =
        JSON.parse(localStorage.getItem("completedTasks")) || {};
      completedTasks[taskId] = !isCompleted;
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

      if (!isCompleted) {
        console.log(`Task ${taskId} marked as completed.`);
        toast.success(`Lesson ${lessonType} is completed!`);
        setCompletedTasksCount(completedTasksCount + 1); // Increment completed tasks count
      } else {
        console.log(`Task ${taskId} marked as uncompleted.`);
        toast.info(`Lesson ${lessonType} is uncompleted.`);
        setCompletedTasksCount(completedTasksCount - 1); // Decrement completed tasks count
      }
      setIsCompleted(!isCompleted);
    } else {
      console.log(`Task ${taskId} not found.`);
    }
  };

  return (
    <div>
      <Navbar />
      <ProgressBar
        numStages={tasksData[lessonType].length}
        completedTasks={completedTasksCount}
      />
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
            <button className='button-28 previous' onClick={handlePrevious}>
              Previous
            </button>
            <button
              className={`button-28 ${isCompleted ? "complete" : ""}`}
              onClick={handleComplete}
            >
              {isCompleted ? "Completed" : "Complete"}
            </button>
            <button className='button-28 next' onClick={handleNext}>
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
