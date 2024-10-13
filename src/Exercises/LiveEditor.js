import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { tasksData } from "../data/tasksData";
import Navbar from "../components/Navbar";
import "../styles/editor.css";
import "react-toastify/dist/ReactToastify.css";
import CodeBlock from "./solutions/CodeBlock";
import { auth } from "../components/firebase";
import axios from "axios";
import debounce from "lodash/debounce";
import throttle from "lodash/throttle";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/cheatsheet.css";
import cheatsheetData from "../data/cheatsheetData.js";

const LiveEditor = () => {
  const { lessonType, taskId } = useParams();
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [checkboxStates, setCheckboxStates] = useState({});
  const [solutionCodes, setSolutionCodes] = useState([]);
  const [showSolution, setShowSolution] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [showCheatsheet, setShowCheatsheet] = useState(false);
  const [cheatsheetContent, setCheatsheetContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const taskContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      setLoading(true);
      try {
        const user = auth.currentUser;
        if (user) {
          const { uid } = user;
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/users/${uid}/subscription-status`
          );
          setSubscriptionStatus(response.data.subscriptionStatus);
        }
      } catch (error) {
        console.error("Error fetching subscription status:", error);
        toast.error("Failed to fetch subscription status. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptionStatus();
  }, []);

  useEffect(() => {
    const lessonCompletedTasksKey = `${lessonType}_completedTasks`;
    const completedTasks = JSON.parse(localStorage.getItem(lessonCompletedTasksKey)) || {};
    setIsCompleted(completedTasks[taskId] || false);

    if (lessonType && taskId) {
      const index = tasksData[lessonType]?.findIndex((task) => task.taskId === taskId);
      if (index !== undefined && index >= 0) {
        setCurrentTaskIndex(index);
        const storedCheckboxStates = JSON.parse(localStorage.getItem(taskId)) || {};
        setCheckboxStates(storedCheckboxStates);
      } else {
        console.error(`Task with ID ${taskId} not found.`);
      }
      setShowSolution(false);
    }
  }, [lessonType, taskId]);

  useEffect(() => {
    import(`./solutions/${taskId}`)
      .then((module) => {
        setSolutionCodes(Array.isArray(module.default) ? module.default : [module.default]);
      })
      .catch((error) => {
        console.error("Error loading solution:", error);
        setSolutionCodes(["Solution not found"]);
      });
  }, [taskId]);

  const handleCheckboxChange = useCallback((stepId) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [stepId]: !prevState[stepId],
    }));
  }, []);

  useEffect(() => {
    localStorage.setItem(taskId, JSON.stringify(checkboxStates));
  }, [taskId, checkboxStates]);

  useEffect(() => {
    if (taskContainerRef.current) {
      taskContainerRef.current.scrollTop = 0;
    }
  }, [taskId]);

  const handleNext = useCallback(() => {
    if (lessonType && tasksData[lessonType] && currentTaskIndex < (tasksData[lessonType]?.length || 0) - 1) {
      if (!isCompleted) {
        toast.warn("Please complete the current task first.");
      } else {
        const nextTask = tasksData[lessonType][currentTaskIndex + 1];
        if (nextTask) {
          navigate(`/editor/${lessonType}/${nextTask.taskId}`);
        }
      }
    }
  }, [lessonType, currentTaskIndex, isCompleted, navigate]);

  const handlePrevious = () => {
    if (currentTaskIndex > 0) {
      const previousTaskId = tasksData[lessonType][currentTaskIndex - 1].taskId;
      navigate(`/editor/${lessonType}/${previousTaskId}`);
    } else {
      toast.info("You are on the first task.");
    }
  };

  const debouncedToastSuccess = debounce((message) => {
    toast.success(message);
  }, 300);

  const throttledComplete = throttle(() => {
    if (isCompleted) {
      toast.info(`This task is already completed.`);
      return;
    }

    const taskIndex = tasksData[lessonType]?.findIndex((task) => task.taskId === taskId);
    if (taskIndex !== -1) {
      const lessonCompletedTasksKey = `${lessonType}_completedTasks`;
      const completedTasks = JSON.parse(localStorage.getItem(lessonCompletedTasksKey)) || {};
      completedTasks[taskId] = true;
      localStorage.setItem(lessonCompletedTasksKey, JSON.stringify(completedTasks));
      debouncedToastSuccess(`Lesson ${lessonType} is completed!`);
      setIsCompleted(true);
    } else {
      console.log(`Task ${taskId} not found.`);
    }
  }, 500);

  const handleComplete = useCallback(() => {
    throttledComplete();
  }, [throttledComplete]);

  const handleToggleSolution = () => {
    if (subscriptionStatus === "subscribed") {
      setShowSolution((prev) => !prev);
    } else {
      toast.info("Access to solutions requires an active subscription. Please subscribe to unlock this feature.");
    }
  };

  const handleToggleCheatsheet = () => {
    const currentCheatsheet = cheatsheetData.find((cheat) => cheat.taskId === taskId);
    if (!currentCheatsheet) {
      toast.error("Cheatsheet not available for this task.");
      setShowCheatsheet(false);
      return;
    }
    setCheatsheetContent(currentCheatsheet);
    setShowCheatsheet((prev) => !prev);
  };

  const currentTask = tasksData[lessonType]?.[currentTaskIndex] || {};
  const { taskTitle, task, steps, link, linkData, videoLink, codesandboxUrl } = currentTask;

  return (
    <div>
      <Navbar />
      <div className='editor-container'>
        <div className='task-container'>
          <div className='task'>
            <div className='text-window' ref={taskContainerRef}>
              <h1>{taskTitle}</h1>
              {task && Object.keys(task).length > 0 && (
                <div className='section'>
                  <h4>Task Description:</h4>
                  <p>{task.taskDescription}</p>
                  <h4>Platform: </h4>
                  <p>{task.platform}</p>
                  <h4>Project Name: </h4>
                  <p>{task.projectName}</p>
                  <h4>Bidding ends:</h4>
                  <p>{task.biddingEnds}</p>
                  <h4>Requirements:</h4>
                  <ul className='text-window-list'>
                    {task.requirements?.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                  <h4>Steps:</h4>
                </div>
              )}
              {steps?.map((step, index) => (
                <div className='taskText-container' key={index}>
                  <div className='step-title-container'>
                    <div className='checkbox-container'>
                      <input
                        type='checkbox'
                        id={`step${index}`}
                        checked={checkboxStates[`step${index}`] || false}
                        onChange={() => handleCheckboxChange(`step${index}`)}
                      />
                      <label htmlFor={`step${index}`}></label>
                    </div>
                    <h3>{step.stepTitle}</h3>
                  </div>
                  <p>{step.titleDescription}</p>
                  {step.sections?.map((section, secIndex) => (
                    <div className='section' key={secIndex}>
                      <h4>{section.subtitleDescription}</h4>
                      <ul className='text-window-list'>
                        {section.descriptions?.map((desc, descIndex) => (
                          <li key={descIndex}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <br />
                </div>
              ))}
              <div className='task-button-container'>
                <button className='button-84' onClick={handleToggleCheatsheet} aria-label="Toggle Cheatsheet">
                  Cheatsheet
                </button>
                {link && (
                  <button className='button-84' onClick={() => window.open(link, "_blank")} aria-label="Download Styles">
                    Download Styles
                  </button>
                )}
                {linkData && (
                  <button className='button-84' onClick={() => window.open(linkData, "_blank")} aria-label="Download Data">
                    Download Data
                  </button>
                )}
                <button className='button-84' onClick={handleToggleSolution} aria-label="Toggle Solution">
                  Solution
                </button>
                {videoLink && (
                  <button className='button-84' onClick={() => window.open(videoLink, "_blank")} aria-label="Video Lesson">
                    Video Lesson
                  </button>
                )}
              </div>
              <AnimatePresence>
                {showCheatsheet && cheatsheetContent && (
                  <motion.div
                    className='cheatsheet-popup'
                    initial={{ opacity: 0, x: "-50%" }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0, x: "50%" }}
                  >
                    <div className='cheatsheet-content'>
                      <div className='cheatsheet-text'>
                        {cheatsheetContent.content?.map((section, index) => (
                          <div key={index} className='cheatsheet-section'>
                            <h3>{section.title}</h3>
                            {section.subtitle && <h2>{section.subtitle}</h2>}
                            <ul>
                              {section.details?.map((detail, idx) => (
                                <li key={idx}>{detail}</li>
                              ))}
                            </ul>
                            {section.image && (
                              <img
                                src={section.image}
                                alt={`cheatsheet-${index}`}
                                className='cheatsheet-image'
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      className='cheatsheet-close-button'
                      onClick={handleToggleCheatsheet}
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {showSolution && (
                <div className='solution-popup'>
                  <div className='solution-container'>
                    <h2 className='solution-title'>
                      Solution code for: {taskTitle || "Task Title"}
                    </h2>
                    {solutionCodes.map((code, index) => (
                      <CodeBlock
                        key={index}
                        code={code}
                        className='code-block'
                      />
                    ))}
                    <button
                      className='close-button button-84'
                      onClick={handleToggleSolution}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {lessonType && tasksData[lessonType]?.length > 0 && (
            <div className='task-buttons'>
              <button className='button-28 previous' onClick={handlePrevious}>
                Previous
              </button>
              <button
                className={`button-28 complete ${isCompleted ? "completed" : ""}`}
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
          src={codesandboxUrl}
          title='React'
          allow='accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb;'
          sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
        ></iframe>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LiveEditor;