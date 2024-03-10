// HtmlLessons.js

import React from "react";
import { Link } from "react-router-dom";
import "../styles/lessons.css";

import HtmlCards from "./HtmlLessonsCards";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProgressBar from "./ProgressBar";
import tasksData from "./tasksData";

function HtmlLessons() {
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
      <div className='lessons-cards'>
        {tasksData.HTML.map((task, index) => (
          <Link to={`/editor/HTML/${task.taskId}`} key={index}>
            <HtmlCards
              header={`Lesson ${index + 1}`}
              img='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/512px-HTML5_Badge.svg.png?20110131171049'
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

export default HtmlLessons;
