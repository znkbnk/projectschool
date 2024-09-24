import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { tasksData } from "../data/tasksData";
import Navbar from "../components/Navbar";
import "../styles/editor.css";
import "react-toastify/dist/ReactToastify.css";
import CodeBlock from "./solutions/CodeBlock";
import { auth } from "../components/firebase";
import axios from "axios";
import { throttle } from "lodash";
import { debounce } from "lodash";
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
  const [showCheatsheet, setShowCheatsheet] = useState(false); // State for cheatsheet popup
  const [cheatsheetContent, setCheatsheetContent] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchSubscriptionStatus = async () => {
      try {
        const user = auth.currentUser;
        if (user && isMounted) {
          const { uid } = user;
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/users/${uid}/subscription-status`
          );
          setSubscriptionStatus(response.data.subscriptionStatus);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error fetching subscription status:", error);
          toast.error("Error fetching subscription status");
        }
      }
    };

    fetchSubscriptionStatus();

    return () => {
      isMounted = false; // Cleanup function to mark component as unmounted
    };
  }, []);

  useEffect(() => {
    const lessonCompletedTasksKey = `${lessonType}_completedTasks`;
    const completedTasks =
      JSON.parse(localStorage.getItem(lessonCompletedTasksKey)) || {};
    setIsCompleted(completedTasks[taskId] || false);
  }, [lessonType, taskId]);

  useEffect(() => {
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
        if (module && Array.isArray(module.default)) {
          setSolutionCodes(module.default);
        } else if (module) {
          setSolutionCodes([module.default]);
        } else {
          setSolutionCodes(["Solution not found"]);
        }
      })
      .catch((error) => {
        console.error("Error loading solution:", error);
        setSolutionCodes(["Solution not found"]);
      });
  }, [taskId]);

  const handleCheckboxChange = (stepId) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [stepId]: !prevState[stepId],
    }));
  };

  useEffect(() => {
    localStorage.setItem(taskId, JSON.stringify(checkboxStates));
  }, [taskId, checkboxStates]);

  const handleNext = () => {
    if (
      lessonType &&
      tasksData[lessonType] &&
      currentTaskIndex < (tasksData[lessonType]?.length || 0) - 1
    ) {
      if (!isCompleted) {
        toast.warn("Please complete the current task first.");
      } else {
        const nextTask = tasksData[lessonType][currentTaskIndex + 1];
        if (nextTask) {
          navigate(`/editor/${lessonType}/${nextTask.taskId}`);
        }
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

  const debouncedToastSuccess = debounce((message) => {
    toast.success(message);
  }, 300); // Adjust delay as needed

  const handleComplete = throttle(() => {
    if (isCompleted) {
      toast.info(`This task is already completed.`);
      return;
    }

    const taskIndex = tasksData[lessonType]?.findIndex(
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
      debouncedToastSuccess(`Lesson ${lessonType} is completed!`);
      setIsCompleted(true);
    } else {
      console.log(`Task ${taskId} not found.`);
    }
  }, 500); // Adjust the debounce time as needed

  const handleDownloadStyles = () => {
    if (currentTask && currentTask.link) {
      window.open(currentTask.link, "_blank");
    } else {
      toast.error("No styles found for download.");
    }
  };

  const handleDownloadImg = () => {
    if (currentTask && currentTask.linkImg) {
      window.open(currentTask.linkImg, "_blank");
    } else {
      toast.error("No images found for download.");
    }
  };

  const handleDownloadData = () => {
    if (currentTask && currentTask.linkData) {
      window.open(currentTask.linkData, "_blank");
    } else {
      toast.error("No data found for download.");
    }
  };

  const handleVideoLesson = () => {
    if (currentTask && currentTask.videoLink) {
      window.open(currentTask.videoLink, "_blank");
    } else {
      toast.error("No video lesson found.");
    }
  };

  const handleToggleSolution = () => {
    if (subscriptionStatus === "subscribed") {
      setShowSolution((prevShowSolution) => !prevShowSolution);
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
      toast.error("Cheatsheet not found for this task.");
      return;
    }

    setCheatsheetContent(currentCheatsheet);
    setShowCheatsheet(!showCheatsheet);
  };

  const currentTask = tasksData[lessonType]?.[currentTaskIndex] || {};

  const codesandboxUrl = currentTask?.codesandboxUrl || "";

  return (
    <div>
      <Navbar />
      <div className='editor-container'>
        <div className='task-container'>
          <div className='task'>
            <div className='text-window'>
              <h1>{currentTask?.taskTitle}</h1>
              {currentTask?.task &&
                Object.keys(currentTask.task).length > 0 && (
                  <div className='section' >
                    <h4>Task Description:</h4>
                    <p>{currentTask.task.taskDescription}</p>
                    <h4>Platform: </h4>
                    <p>{currentTask.task.platform}</p>
                    <h4>Requirements:</h4>
                    <ul className='text-window-list'>
                      {currentTask.task.requirements?.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                    <h4>Steps:</h4>
                  </div>
                )}
              {lessonType &&
                currentTask?.steps?.map((step, index) => (
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
                <button className='button-84' onClick={handleToggleCheatsheet}>
                  Cheatsheet
                </button>
                {currentTask?.link && (
                  <button className='button-84' onClick={handleDownloadStyles}>
                    Download Styles
                  </button>
                )}
                {currentTask?.linkImg && (
                  <button className='button-84' onClick={handleDownloadImg}>
                    Download Images
                  </button>
                )}
                {currentTask?.linkData && (
                  <button className='button-84' onClick={handleDownloadData}>
                    Download Data
                  </button>
                )}
                <button className='button-84' onClick={handleToggleSolution}>
                  Solution
                </button>
                {currentTask?.videoLink && (
                  <button className='button-84' onClick={handleVideoLesson}>
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
                      Solution code for:{" "}
                      {currentTask?.taskTitle || "Task Title"}
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

