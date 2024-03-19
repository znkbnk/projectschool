import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/lessons.css";
import HtmlCards from "./HtmlLessonsCards";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProgressBar from "./ProgressBar";
import { tasksData, authorsData } from "./tasksData";

function HtmlLessons() {
  const [showEasy, setShowEasy] = useState(false);
  const [showHard, setShowHard] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showUncompleted, setShowUncompleted] = useState(false);
  const numLessons = tasksData.HTML.length;

  const getCompletedTasksCount = () => {
    let count = 0;
    const completedTasks =
      JSON.parse(localStorage.getItem("completedTasks")) || {};
    for (const taskId in completedTasks) {
      if (completedTasks[taskId]) {
        count++;
      }
    }
    return count;
  };

  const getAuthorInfo = (authorIndex) => {
    return authorsData[authorIndex];
  };

  const filteredCssTasks = tasksData.HTML.filter((task) => {
    const completedTasks =
      JSON.parse(localStorage.getItem("completedTasks")) || {};
    if (showCompleted && completedTasks[task.taskId]) {
      return true;
    }
    if (showUncompleted && !completedTasks[task.taskId]) {
      return true;
    }
    if (showEasy && task.difficulty === "Easy") {
      return true;
    }
    if (showHard && task.difficulty === "Hard") {
      return true;
    }
    if (!showEasy && !showHard && !showCompleted && !showUncompleted) {
      return true;
    }
    return false;
  });

  return (
    <>
      <Navbar />
      <div className='header'>
        <h1>HTML Lessons</h1>
      </div>
      <ProgressBar
        numStages={numLessons}
        completedTasks={getCompletedTasksCount()}
      />
      <div className='sort'>
        <h4>Show:</h4>
        <button
          className='button-84'
          onClick={() => {
            setShowEasy(false);
            setShowHard(false);
            setShowCompleted(false);
            setShowUncompleted(false);
          }}
        >
          All
        </button>
        <button
          className='button-84'
          onClick={() => {
            setShowEasy(true);
            setShowHard(false);
            setShowCompleted(false);
            setShowUncompleted(false);
          }}
        >
          Easy
        </button>
        <button
          className='button-84'
          onClick={() => {
            setShowEasy(false);
            setShowHard(true);
            setShowCompleted(false);
            setShowUncompleted(false);
          }}
        >
          Hard
        </button>
        <button
          className='button-84'
          onClick={() => {
            setShowEasy(false);
            setShowHard(false);
            setShowCompleted(true);
            setShowUncompleted(false);
          }}
        >
          Completed
        </button>
        <button
          className='button-84'
          onClick={() => {
            setShowEasy(false);
            setShowHard(false);
            setShowCompleted(false);
            setShowUncompleted(true);
          }}
        >
          Uncompleted
        </button>
      </div>
      <div className='lessons-cards'>
        {filteredCssTasks.map((task, index) => {
          // Find the original index of the task in tasksData.HTML
          const originalIndex = tasksData.HTML.findIndex(
            (originalTask) => originalTask.taskId === task.taskId
          );
          // Calculate the lesson number based on the original index
          const lessonNumber = originalIndex + 1;
          return (
            <Link
              to={`/editor/HTML/${task.taskId}`}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <HtmlCards
                header={`Lesson ${lessonNumber}`} // Use the calculated lesson number
                img='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/512px-HTML5_Badge.svg.png?20110131171049'
                title={task.taskTitle}
                authorInfo={getAuthorInfo(task.authorIndex)}
                introduction={task.introduction}
                difficulty={task.difficulty}
              />
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default HtmlLessons;
