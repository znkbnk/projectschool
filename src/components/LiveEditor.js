import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { tasksData } from "./tasksData";
import Navbar from "./Navbar";
import "../styles/editor.css";
import "react-toastify/dist/ReactToastify.css";
import image1 from "../images/pslogo.png";
import sectionImg4 from "../images/sectionImg4.png";

const LiveEditor = () => {
  const { lessonType, taskId } = useParams();
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const [showContent, setShowContent] = useState(true); 

  const navigate = useNavigate();

  let task = null;

  useEffect(() => {
    console.log("lessonType:", lessonType);
    console.log("taskId:", taskId);
    if (lessonType && tasksData[lessonType]) {
      console.log("tasksData[lessonType]:", tasksData[lessonType]);
      const index = tasksData[lessonType].findIndex(
        (task) => task.taskId === taskId
      );
      console.log("index:", index);
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
    console.log("task:", task);
  }

  const taskText = task ? task.taskText : "";

const handleNext = () => {
  if (lessonType && currentTaskIndex < tasksData[lessonType].length - 1) {
    if (!isCompleted) {
      toast.warn("Please complete the current task first.");
    } else {
      const nextTaskId = tasksData[lessonType][currentTaskIndex + 1].taskId;
      navigate(`/editor/${lessonType}/${nextTaskId}`);
    }
  }
};

  const handlePrevious = () => {
    if (currentTaskIndex > 0) {
      const previousTaskId = tasksData[lessonType][currentTaskIndex - 1].taskId;
      navigate(`/editor/${lessonType}/${previousTaskId}`);
    } else {
      toast.info("You are on the first task.");
    }
  };

  const handleComplete = () => {
    if (isCompleted) {
      toast.info(`This task is already completed.`);
      return;
    }

    const taskIndex = tasksData[lessonType].findIndex(
      (task) => task.taskId === taskId
    );

    if (taskIndex !== -1) {
      const updatedTasksData = { ...tasksData };
      updatedTasksData[lessonType][taskIndex].completed = true;

      const completedTasks =
        JSON.parse(localStorage.getItem("completedTasks")) || {};
      completedTasks[taskId] = true;
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

      console.log(`Task ${taskId} marked as completed.`);
      toast.success(`Lesson ${lessonType} is completed!`);
      setCompletedTasksCount(completedTasksCount + 1);
      setIsCompleted(true);
    } else {
      console.log(`Task ${taskId} not found.`);
    }
  };



  const handleResize = () => {
    setShowContent(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className={showContent ? "editor-container" : "hidden"}>
        <div className='task-container'>
          <div className='task'>
            <div className='text-window'>
              {lessonType ? (
                <p>
                  {lessonType} lesson: {taskText}
                </p>
              ) : (
                <p>Start Practicing...</p>
              )}
            </div>
          </div>
          {lessonType && lessonType.length > 0 && (
            <div className='task-buttons'>
              <button className='button-28 previous' onClick={handlePrevious}>
                Previous
              </button>
              <button
                className={`button-28 complete ${
                  isCompleted ? "completed" : ""
                }`}
                onClick={handleComplete}
              >
                {isCompleted ? "Completed" : "Complete"}
              </button>
              <button className='button-28 next' onClick={handleNext}>
                Next
              </button>
            </div>
          )}
        </div>
        <iframe
          src={`https://codesandbox.io/embed/jhw9jl?view=Editor+%2B+Preview&module=%2Fsrc%2Fapp.tsx&hidenavigation=1&task=${taskId}`}
          title='React'
          allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
          sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
        ></iframe>
      </div>
      <ToastContainer />
      {showContent && (
        <div className='continue-on-computer'>
          <div className='word-container'>
            <img src={sectionImg4} alt='logo' className='sectionImg4'></img>
            <p>
              For optimal user experience, it is recommended to utilize a
              computer. Additionally, employing a computer can enhance
              efficiency and productivity.
            </p>
            <div className='sectionImages-container'>
              <img className='projectschoolImg' src={image1} alt='logo'></img>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveEditor;
