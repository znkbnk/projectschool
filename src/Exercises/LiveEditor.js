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
import { throttle } from 'lodash';
import { debounce } from 'lodash';

const LiveEditor = () => {
  const { lessonType, taskId } = useParams();
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [checkboxStates, setCheckboxStates] = useState({});
  const [solutionCodes, setSolutionCodes] = useState([]);
  const [showSolution, setShowSolution] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
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
          console.log("Subscription status:", response.data);
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
    }
  }, [lessonType, taskId]);

  useEffect(() => {
    import(`./solutions/${taskId}`)
      .then((module) => {
        if (Array.isArray(module.default)) {
          setSolutionCodes(module.default);
        } else {
          setSolutionCodes([module.default]);
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
    const styleLink = currentTask?.link;
    if (styleLink) {
      window.open(styleLink, "_blank");
    } else {
      toast.error("No styles found for download.");
    }
  };

  const handleDownloadImg = () => {
    const imgLink = currentTask?.linkImg;
    if (imgLink) {
      window.open(imgLink, "_blank");
    } else {
      toast.error("No images found for download.");
    }
  };

  const handleDownloadData = () => {
    const dataLink = currentTask?.linkData;
    if (dataLink) {
      window.open(dataLink, "_blank");
    } else {
      toast.error("No data found for download.");
    }
  };

  const handleToggleSolution = () => {
    if (subscriptionStatus === "subscribed") {
      setShowSolution(!showSolution);
    } else {
      toast.info(
        "Access to solutions requires an active subscription. Please subscribe to unlock this feature."
      );
    }
  };

  const currentTask = tasksData[lessonType]?.[currentTaskIndex];
  const codesandboxUrl = currentTask?.codesandboxUrl || "";

  return (
    <div>
      <Navbar />
      <div className='editor-container'>
        <div className='task-container'>
          <div className='task'>
            <div className='text-window'>
              <h1>{currentTask?.taskTitle}</h1>
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
              </div>
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
