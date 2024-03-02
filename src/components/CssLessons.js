import React from "react";
import { Link } from "react-router-dom";
import "../styles/lessons.css";

import CssCards from "./CssLessonsCards";
import Navbar from "./Navbar";
import Footer from "./Footer";
import tasksData from "./tasksData";

function CssLessons() {
  return (
    <>
      <Navbar />
      <div className='header'>
        <h1>CSS Lessons</h1>
      </div>
      <div className='lessons-cards'>
        {tasksData.CSS.map((task, index) => (
          <Link
            to={`/editor/CSS/${task.taskId}`} // Updated Link destination
            key={index}
          >
            <CssCards
              header={`Lesson ${index + 1}`}
              img='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817'
              title={task.title}
              author={task.author}
            />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default CssLessons;
