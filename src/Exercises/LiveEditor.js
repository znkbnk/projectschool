import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { tasksData } from "../data/tasksData";
import Navbar from "../components/Navbar";
import "../styles/editor.css";
import "react-toastify/dist/ReactToastify.css";
import CodeBlock from "./solutions/CodeBlock";
import { auth } from '../components/firebase';
import axios from 'axios';

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
    const fetchSubscriptionStatus = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const { uid } = user;
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/${uid}/subscription-status`);
          console.log('Subscription status:', response.data);
          setSubscriptionStatus(response.data.subscriptionStatus);
        }
      } catch (error) {
        console.error('Error fetching subscription status:', error);
        toast.error('Error fetching subscription status');
      }
    };
  
    fetchSubscriptionStatus();
  }, []);

  useEffect(() => {
    const lessonCompletedTasksKey = `${lessonType}_completedTasks`;
    const completedTasks = JSON.parse(localStorage.getItem(lessonCompletedTasksKey)) || {};
    setIsCompleted(completedTasks[taskId] || false);
  }, [lessonType, taskId]);

  useEffect(() => {
    if (lessonType && taskId) {
      const index = tasksData[lessonType].findIndex(task => task.taskId === taskId);
      setCurrentTaskIndex(index);
      const storedCheckboxStates = JSON.parse(localStorage.getItem(taskId)) || {};
      setCheckboxStates(storedCheckboxStates);
    }
  }, [lessonType, taskId]);

  useEffect(() => {
    import(`./solutions/${taskId}`)
      .then(module => {
        if (Array.isArray(module.default)) {
          setSolutionCodes(module.default);
        } else {
          setSolutionCodes([module.default]);
        }
      })
      .catch(error => {
        console.error("Error loading solution:", error);
        // Handle the error here, potentially display a message to the user
        setSolutionCodes(["Solution not found"]);
      });
  }, [taskId]);



  

  const handleCheckboxChange = stepId => {
    setCheckboxStates(prevState => ({
      ...prevState,
      [stepId]: !prevState[stepId]
    }));
  };

  useEffect(() => {
    localStorage.setItem(taskId, JSON.stringify(checkboxStates));
  }, [taskId, checkboxStates]);

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

    const taskIndex = tasksData[lessonType].findIndex(task => task.taskId === taskId);

    if (taskIndex !== -1) {
      const lessonCompletedTasksKey = `${lessonType}_completedTasks`;
      const updatedTasksData = { ...tasksData };
      updatedTasksData[lessonType][taskIndex].completed = true;

      const completedTasks = JSON.parse(localStorage.getItem(lessonCompletedTasksKey)) || {};
      completedTasks[taskId] = true;
      localStorage.setItem(lessonCompletedTasksKey, JSON.stringify(completedTasks));

      console.log(`Task ${taskId} marked as completed.`);
      toast.success(`Lesson ${lessonType} is completed!`);
      setIsCompleted(true);
    } else {
      console.log(`Task ${taskId} not found.`);
    }
  };

  const handleDownloadStyles = () => {
    const styleLink = tasksData[lessonType][currentTaskIndex].link;
    if (styleLink) {
      window.open(styleLink, "_blank");
    } else {
      toast.error("No styles found for download.");
    }
  };

  const handleDownloadImg = () => {
    const imgLink = tasksData[lessonType][currentTaskIndex].linkImg;
    if (imgLink) {
      window.open(imgLink, "_blank");
    } else {
      toast.error("No images found for download.");
    }
  };

  const handleDownloadData = () => {
    const dataLink = tasksData[lessonType][currentTaskIndex].linkData;
    if (dataLink) {
      window.open(dataLink, "_blank");
    } else {
      toast.error("No data found for download.");
    }
  };

  const handleToggleSolution = () => {
    if (subscriptionStatus === 'subscribed') {
      setShowSolution(!showSolution);
    } else {
      toast.info('Access to solutions requires an active subscription. Please subscribe to unlock this feature.');

      // toast.info('Solution not available at the moment');

    }
  };

  const currentTask = tasksData[lessonType][currentTaskIndex];
  const codesandboxUrl = currentTask ? currentTask.codesandboxUrl : "";

  return (
    <div>
      <Navbar />
      <div className='editor-container'>
        <div className='task-container'>
          <div className='task'>
            <div className='text-window'>
              <h1>{currentTask.taskTitle}</h1>
              {lessonType &&
                currentTask.steps.map((step, index) => (
                  <div className='taskText-container' key={index}>
                    <h3>{step.stepTitle}</h3>
                    <h4>{step.titleDescription}</h4>
                    <div className='checkbox-container'>
                      <input
                        type='checkbox'
                        id={`step${index}`}
                        checked={checkboxStates[`step${index}`]}
                        onChange={() => handleCheckboxChange(`step${index}`)}
                      />
                      <label htmlFor={`step${index}`}>
                        <ul>
                          {step.description.map((desc, descIndex) => (
                            <li key={descIndex}>{desc}</li>
                          ))}
                        </ul>
                      </label>
                    </div>
                    <br />
                  </div>
                ))}
              <div className='task-button-container'>
                {currentTask.link && (
                  <button className='button-84' onClick={handleDownloadStyles}>
                    Download Styles
                  </button>
                )}
                {currentTask.linkImg && (
                  <button className='button-84' onClick={handleDownloadImg}>
                    Download Images
                  </button>
                )}{" "}
                {currentTask.linkData && (
                 
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
                   {currentTask ? currentTask.taskTitle : "Task Title"}
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
