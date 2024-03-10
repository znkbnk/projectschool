// HtmlLessons.js

import React from "react";
import { Link } from "react-router-dom";
import "../styles/lessons.css";

import CssCards from "./CssLessonsCards";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProgressBar from "./ProgressBar";
import tasksData from "./tasksData";

function CssLessons() {
  const numLessons = tasksData.CSS.length;

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
        <h1>CSS Lessons</h1>
      </div>
      <ProgressBar
        numStages={numLessons}
        completedTasks={getCompletedTasksCount()}
      />
      <div className='lessons-cards'>
        {tasksData.CSS.map((task, index) => (
          <Link to={`/editor/CSS/${task.taskId}`} key={index}>
            <CssCards
              header={`Lesson ${index + 1}`}
              img='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817'
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

export default CssLessons;
