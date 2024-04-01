// LiveEditor.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { tasksData } from "./tasksData";
import Navbar from "./Navbar";
import "../styles/editor.css";
import "react-toastify/dist/ReactToastify.css";

const LiveEditor = () => {
  const { lessonType, taskId } = useParams();
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [showContent, setShowContent] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const lessonCompletedTasksKey = `${lessonType}_completedTasks`;
    const completedTasks =
      JSON.parse(localStorage.getItem(lessonCompletedTasksKey)) || {};
    setIsCompleted(completedTasks[taskId] || false);
  }, [lessonType, taskId]);

  useEffect(() => {
    if (lessonType && taskId) {
      const index = tasksData[lessonType].findIndex(
        (task) => task.taskId === taskId
      );
      setCurrentTaskIndex(index);
    }
  }, [lessonType, taskId]);

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
      const lessonCompletedTasksKey = `${lessonType}_completedTasks`;
      const updatedTasksData = { ...tasksData };
      updatedTasksData[lessonType][taskIndex].completed = true;

      const completedTasks =
        JSON.parse(localStorage.getItem(lessonCompletedTasksKey)) || {};
      completedTasks[taskId] = true;
      localStorage.setItem(
        lessonCompletedTasksKey,
        JSON.stringify(completedTasks)
      );

      console.log(`Task ${taskId} marked as completed.`);
      toast.success(`Lesson ${lessonType} is completed!`);
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
                  {lessonType} lesson:{" "}
                  {tasksData[lessonType][currentTaskIndex].taskText}
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
    </div>
  );
};

export default LiveEditor;
