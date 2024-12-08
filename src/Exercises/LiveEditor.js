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
import CodeBlock from "../Exercises/CodeBlock.js";
import { auth } from "../components/firebase";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/cheatsheet.css";
import "../styles/showStyles.css";
import cheatsheetData from "../data/cheatsheetData.js";
import stylesData from "../data/stylesData.js";

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

  // eslint-disable-next-line no-unused-vars
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
        toast.error(
          "Failed to fetch subscription status. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptionStatus();
  }, []);

  useEffect(() => {
    const lessonCompletedTasksKey = `${lessonType}_completedTasks`;
    const completedTasks =
      JSON.parse(localStorage.getItem(lessonCompletedTasksKey)) || {};
    setIsCompleted(completedTasks[taskId] || false);

    if (lessonType && taskId) {
      const index = tasksData[lessonType]?.findIndex(
        (task) => task.taskId === taskId
      );
      if (index !== undefined && index >= 0) {
        setCurrentTaskIndex(index);
        const storedCheckboxStates =
          JSON.parse(localStorage.getItem(taskId)) || {};
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
        setSolutionCodes(
          Array.isArray(module.default) ? module.default : [module.default]
        );
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

  const handleNext = () => {
    // Check if the current task is completed and navigate to the next one
 
  
    // Navigate to the next task in the list
    if (currentTaskIndex < tasksData[lessonType]?.length - 1) {
      const nextTaskId = tasksData[lessonType][currentTaskIndex + 1].taskId;
      navigate(`/editor/${lessonType}/${nextTaskId}`);
    } else {
      toast.info("You have reached the last task.");
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

  const handleComplete = useCallback(() => {
    if (isCompleted) {
      toast.info("This task is already completed.");
      return;
    }

    if (
      window.confirm("Are you sure you want to mark this task as completed?")
    ) {
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
    }
  }, [isCompleted, lessonType, taskId]);

  const handleToggleSolution = () => {
    if (subscriptionStatus === "subscribed") {
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
    } else {
      toast.info(
        "Access to solutions requires an active subscription. Please subscribe to unlock this feature."
      );
    }
  };

  const handleToggleCheatsheet = () => {
    const currentCheatsheet = cheatsheetData.find(
      (cheat) => cheat.taskId === taskId
    );
    if (!currentCheatsheet) {
      toast.error("Cheatsheet not available for this task.");
      setShowCheatsheet(false);
      return;
    }
    setCheatsheetContent(currentCheatsheet);
    setShowCheatsheet((prev) => !prev);
  };

  const handleToggleStyles = () => {
    // Filter styles based on the current taskId
    const currentStyles = stylesData.filter((style) => style.taskId === taskId);

    if (currentStyles.length === 0) {
      toast.error("No styles available for this task.");
      setShowStyles(false);
      return;
    }

    setSelectedStyle(currentStyles);
    setShowStyles((prev) => !prev);
  };

  const handleCloseStyles = () => {
    setShowStyles(false);
  };

  const handleCopyToClipboard = (css) => {
    navigator.clipboard.writeText(css).then(() => {
      setCopied(true); // Set copied state to true

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false); // Reset copied state back to false
      }, 2000);
    });
  };

  const handleCloseCheatsheet = () => {
    setShowCheatsheet(false);
  };

  const handleToggleVideoPopup = () => {
    setShowVideoPopup((prev) => !prev);
  };

  const getEmbedLink = (videoLink) => {
    // Check if it's a short youtu.be link
    if (videoLink.includes("youtu.be")) {
      // Extract the video ID after 'youtu.be/'
      const videoId = videoLink.split("/").pop();
      // Return the embed URL format
      return `https://www.youtube.com/embed/${videoId}`;
    } else {
      // If it's already an embed link, return it as is
      return videoLink;
    }
  };

  // Add this useEffect to handle clicks outside the cheatsheet popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      const cheatsheetPopup = document.querySelector(".cheatsheet-popup");
      const videoPopup = document.querySelector(".video-popup-window");
      const showStyles = document.querySelector(".styles-popup");
      if (cheatsheetPopup && !cheatsheetPopup.contains(event.target)) {
        handleCloseCheatsheet();
      }

      // Check if the video popup is open and if the click was outside of it
      if (videoPopup && !videoPopup.contains(event.target)) {
        handleToggleVideoPopup(); // Close the video popup
      }

      if (showStyles && !showStyles.contains(event.target)) {
        handleCloseStyles(); // Close the video popup
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentTask = useMemo(() => {
    return tasksData[lessonType]?.[currentTaskIndex] || {};
  }, [lessonType, currentTaskIndex]);

  const { taskTitle, task, steps, videoLink, codesandboxUrl } = currentTask;

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
                <button
                  className='button-84'
                  onClick={handleToggleStyles}
                  aria-label='Toggle Styles'
                >
                  Show Styles
                </button>
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
              <AnimatePresence>
                {showVideoPopup && (
                  <motion.div
                    className='video-popup-window'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <button
                      className='video-close-button'
                      onClick={handleToggleVideoPopup}
                    >
                      &times;
                    </button>
                    <div className='video-container'>
                      <iframe
                        src={getEmbedLink(videoLink)}
                        title='Video Lesson'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        style={{ border: "none" }}
                      ></iframe>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

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
                            <div className='style-header'>
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
                            <button
                              className='styles-close-button'
                              onClick={handleCloseStyles}
                            >
                              Close
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

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
                          <div key={index}>
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
          allow='accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb;'
          sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
        ></iframe>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LiveEditor;
