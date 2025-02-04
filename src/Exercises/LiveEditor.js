/* eslint-disable no-unused-vars */
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { tasksData } from "../data/tasksData";
import Navbar from "../components/Navbar";
import "../styles/editor.css";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../components/firebase";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/cheatsheet.css";
import "../styles/showStyles.css";
import cheatsheetData from "../data/cheatsheetData.js";
import stylesData from "../data/stylesData.js";
import CheatsheetPopup from "./CheatsheetPopup";
import StylesPopup from "./StylesPopup";
import SolutionPopup from "./SolutionPopup";
import VideoPopup from "./VideoPopup";

const LiveEditor = ({ tasks }) => {
  const { lessonType, taskId } = useParams();
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [checkboxStates, setCheckboxStates] = useState({});
  const [solutionCodes, setSolutionCodes] = useState([]);
  const [showSolution, setShowSolution] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const [showCheatsheet, setShowCheatsheet] = useState(false);
  const [cheatsheetContent, setCheatsheetContent] = useState(null);
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [showStyles, setShowStyles] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [copied, setCopied] = useState(false);
  const [buttonText, setButtonText] = useState("Solution");
  const [loadingSolution, setLoadingSolution] = useState(false);
  const taskContainerRef = useRef(null);
  const navigate = useNavigate();

  // Fetch subscription status
  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
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
        toast.error(
          "Failed to fetch subscription status. Please try again later."
        );
      }
    };

    fetchSubscriptionStatus();
  }, []);

  // Initialize task state
  useEffect(() => {
    if (!lessonType || !taskId) {
      console.error("Lesson type or task ID is missing.");
      toast.error("Invalid lesson or task. Please check the URL.");
      navigate("/");
      return;
    }

    const lessonCompletedTasksKey = `${lessonType}_completedTasks`;
    const completedTasks =
      JSON.parse(localStorage.getItem(lessonCompletedTasksKey)) || {};
    setIsCompleted(completedTasks[taskId] || false);

    const tasksForLesson = tasksData[lessonType];
    if (!tasksForLesson) {
      console.error(`No tasks found for lesson type: ${lessonType}`);
      toast.error(`No tasks available for lesson: ${lessonType}`);
      navigate("/");
      return;
    }

    const index = tasksForLesson.findIndex((task) => task.taskId === taskId);
    if (index === -1) {
      console.error(`Task with ID ${taskId} not found.`);
      toast.error(`Task not found: ${taskId}`);
      navigate("/");
      return;
    }

    setCurrentTaskIndex(index);
    const storedCheckboxStates = JSON.parse(localStorage.getItem(taskId)) || {};
    setCheckboxStates(storedCheckboxStates);
    setShowSolution(false);
  }, [lessonType, taskId, navigate]);

  // Load solution codes
  useEffect(() => {
    const loadSolutionCodes = async () => {
      setLoadingSolution(true);
      try {
        const module = await import(`./solutions/${taskId}`);
        setSolutionCodes(
          Array.isArray(module.default) ? module.default : [module.default]
        );
      } catch (error) {
        console.error("Error loading solution:", error);
        setSolutionCodes(["Solution not found"]);
      } finally {
        setLoadingSolution(false);
      }
    };

    if (taskId) {
      loadSolutionCodes();
    }
  }, [taskId]);

  // Handle checkbox change
  const handleCheckboxChange = useCallback((stepId) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [stepId]: !prevState[stepId],
    }));
  }, []);

  // Persist checkbox states to localStorage
  useEffect(() => {
    localStorage.setItem(taskId, JSON.stringify(checkboxStates));
  }, [taskId, checkboxStates]);

  // Scroll to top on task change
  useEffect(() => {
    if (taskContainerRef.current) {
      taskContainerRef.current.scrollTop = 0;
    }
  }, [taskId]);

  // Handle next task
  const handleNext = useCallback(() => {
    try {
      const tasksForLesson = tasksData[lessonType];
      if (!tasksForLesson) {
        toast.error("No tasks found for the current lesson.");
        return;
      }

      if (currentTaskIndex < tasksForLesson.length - 1) {
        const nextTaskId = tasksForLesson[currentTaskIndex + 1].taskId;
        navigate(`/editor/${lessonType}/${nextTaskId}`);
      } else {
        toast.info("You have reached the last task.");
      }
    } catch (error) {
      console.error("Error navigating to next task:", error);
      toast.error("Failed to navigate to the next task.");
    }
  }, [lessonType, currentTaskIndex, navigate]);

  // Handle previous task
  const handlePrevious = useCallback(() => {
    try {
      if (currentTaskIndex > 0) {
        const previousTaskId =
          tasksData[lessonType][currentTaskIndex - 1].taskId;
        navigate(`/editor/${lessonType}/${previousTaskId}`);
      } else {
        toast.info("You are on the first task.");
      }
    } catch (error) {
      console.error("Error navigating to previous task:", error);
      toast.error("Failed to navigate to the previous task.");
    }
  }, [lessonType, currentTaskIndex, navigate]);

  // Handle task completion
  const handleComplete = useCallback(async () => {
    if (isCompleted) {
      toast.info("This task is already completed.");
      return;
    }

    if (
      window.confirm("Are you sure you want to mark this task as completed?")
    ) {
      try {
        const taskIndex = tasksData[lessonType]?.findIndex(
          (task) => task.taskId === taskId
        );

        if (taskIndex === -1) {
          console.error(`Task ${taskId} not found.`);
          return;
        }

        const lessonCompletedTasksKey = `${lessonType}_completedTasks`;
        const completedTasks =
          JSON.parse(localStorage.getItem(lessonCompletedTasksKey)) || {};

        // Mark this task as completed
        completedTasks[taskId] = true;
        localStorage.setItem(
          lessonCompletedTasksKey,
          JSON.stringify(completedTasks)
        );

        setIsCompleted(true);
        toast.success(`Lesson ${lessonType} is completed!`);
      } catch (error) {
        console.error("Error marking task as completed:", error);
        toast.error("Failed to mark task as completed.");
      }
    }
  }, [isCompleted, lessonType, taskId]);

  // Handle solution toggle
  const handleToggleSolution = useCallback(async () => {
    if (subscriptionStatus === "subscribed") {
      try {
        const newSolutionState = !showSolution;
        setShowSolution(newSolutionState);

        if (newSolutionState) {
          setButtonText("Scroll Down ↓");

          setTimeout(() => {
            setButtonText("Solution");
          }, 1500);
        } else {
          setButtonText("Solution");
        }
      } catch (error) {
        console.error("Error toggling solution:", error);
        toast.error("Failed to toggle solution.");
      }
    } else {
      toast.info(
        "Access to solutions requires an active subscription. Please subscribe to unlock this feature."
      );
    }
  }, [subscriptionStatus, showSolution]);

  // Handle closing styles popup
  const handleCloseStyles = useCallback(() => {
    setShowStyles(false);
  }, []);

  // Handle copying to clipboard
  const handleCopyToClipboard = useCallback(async (css) => {
    try {
      await navigator.clipboard.writeText(css);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      toast.error("Failed to copy to clipboard.");
    }
  }, []);

  // Handle closing cheatsheet popup
  const handleCloseCheatsheet = useCallback(() => {
    setShowCheatsheet(false);
  }, []);

  // Handle toggling video popup
  const handleToggleVideoPopup = useCallback(() => {
    setShowVideoPopup((prev) => !prev);
  }, []);

  // Handle toggling cheatsheet popup
  const handleToggleCheatsheet = useCallback(() => {
    const currentCheatsheet = cheatsheetData.find(
      (cheatsheet) => cheatsheet.taskId === taskId
    );

    if (currentCheatsheet) {
      setCheatsheetContent(currentCheatsheet);
      setShowCheatsheet((prev) => !prev);
    } else {
      toast.error("No cheatsheet available for this task.");
      setShowCheatsheet(false);
    }
  }, [taskId]);

  // Handle click outside popups
  useEffect(() => {
    const handleClickOutside = (event) => {
      try {
        const cheatsheetPopup = document.querySelector(".cheatsheet-popup");
        const videoPopup = document.querySelector(".video-popup-window");
        const stylesPopup = document.querySelector(".styles-popup");

        if (cheatsheetPopup && !cheatsheetPopup.contains(event.target)) {
          handleCloseCheatsheet();
        }

        if (videoPopup && !videoPopup.contains(event.target)) {
          handleToggleVideoPopup();
        }

        if (stylesPopup && !stylesPopup.contains(event.target)) {
          handleCloseStyles();
        }
      } catch (error) {
        console.error("Error handling click outside:", error);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleCloseCheatsheet, handleToggleVideoPopup, handleCloseStyles]);

  // Memoize current task
  const currentTask = useMemo(() => {
    return tasksData[lessonType]?.[currentTaskIndex] || {};
  }, [lessonType, currentTaskIndex]);

  const { taskTitle, task, steps, videoLink, codesandboxUrl } = currentTask;

  if (!currentTask || !taskTitle) {
    return (
      <div>
        <Navbar />
        <div className='editor-container'>
          <div className='task-container'>
            <div className='task'>
              <div className='text-window'>
                <h6>Task Not Found</h6>
                <p>
                  The task you are looking for does not exist. Please check the
                  URL or go back to the home page.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className='editor-container'>
        <div className='task-container'>
          <div className='task'>
            <div className='text-window' ref={taskContainerRef}>
              <h6>{taskTitle}</h6>
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
                <button
                  className='button-84'
                  onClick={handleToggleCheatsheet}
                  aria-label='Toggle Cheatsheet'
                >
                  Cheatsheet
                </button>
                <StylesPopup taskId={taskId} stylesData={stylesData} />
                <button
                  className='button-84'
                  onClick={handleToggleSolution}
                  aria-label='Toggle Solution'
                >
                  {buttonText}
                </button>
                {videoLink && (
                  <button
                    className='button-84'
                    onClick={handleToggleVideoPopup}
                    aria-label='Video Lesson'
                  >
                    Video Lesson
                  </button>
                )}
              </div>

              <VideoPopup
                showVideoPopup={showVideoPopup}
                videoLink={videoLink}
                onClose={handleToggleVideoPopup}
              />

              <AnimatePresence>
                {showStyles && selectedStyle && (
                  <motion.div
                    className='styles-popup'
                    initial={{ opacity: 0, x: "-50%" }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0, x: "50%" }}
                  >
                    <div className='styles-content'>
                      <div className='styles-text'>
                        {selectedStyle.map((style, index) => (
                          <div key={index} className='style-item'>
                            <div>
                              <h3>{style.title}</h3>
                              <button
                                className={`styles-copy-button ${
                                  copied ? "copied" : ""
                                }`}
                                onClick={() => handleCopyToClipboard(style.css)}
                              >
                                {copied ? "Copied!" : "Copy Code"}
                              </button>
                              <button
                                className='styles-close-button'
                                onClick={handleCloseStyles}
                              >
                                Close
                              </button>
                            </div>
                            <pre>
                              <code>{style.css}</code>
                            </pre>

                            {style.css2 && (
                              <div>
                                {style.title2 && <h3>{style.title2}</h3>}{" "}
                                <button
                                  className={`styles-copy-button ${
                                    copied ? "copied" : ""
                                  }`}
                                  onClick={() =>
                                    handleCopyToClipboard(style.css2)
                                  }
                                >
                                  {copied ? "Copied!" : "Copy Code"}
                                </button>
                                <button
                                  className='styles-close-button'
                                  onClick={handleCloseStyles}
                                >
                                  Close
                                </button>
                                <pre>
                                  <code>{style.css2}</code>
                                </pre>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {showCheatsheet && cheatsheetContent && (
                  <CheatsheetPopup
                    cheatsheetContent={cheatsheetContent}
                    onClose={handleToggleCheatsheet}
                  />
                )}
              </AnimatePresence>

              <SolutionPopup
                showSolution={showSolution}
                taskTitle={taskTitle}
                loadingSolution={loadingSolution}
                solutionCodes={solutionCodes}
                onClose={handleToggleSolution}
              />
            </div>
          </div>
          {lessonType && tasksData[lessonType]?.length > 0 && (
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
          src={codesandboxUrl}
          title='React'
          allow='accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; xr-spatial-tracking'
          sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
        ></iframe>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LiveEditor;