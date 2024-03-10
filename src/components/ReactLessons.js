// HtmlLessons.js

import React from "react";
import { Link } from "react-router-dom";
import "../styles/lessons.css";

import ReactCards from "./ReactLessonsCards";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProgressBar from "./ProgressBar";
import tasksData from "./tasksData";

function ReactLessons() {
  const numLessons = tasksData.React.length;

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

  return (
    <>
      <Navbar />
      <div className='header'>
        <h1>React Lessons</h1>
      </div>
      <ProgressBar
        numStages={numLessons}
        completedTasks={getCompletedTasksCount()}
      />
      <div className='lessons-cards'>
        {tasksData.React.map((task, index) => (
          <Link to={`/editor/React/${task.taskId}`} key={index}>
            <ReactCards
              header={`Lesson ${index + 1}`}
              img='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
              title={task.taskTitle}
              author={task.author}
              introduction={task.introduction}
            />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default ReactLessons;
