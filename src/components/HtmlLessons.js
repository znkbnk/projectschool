import React from "react";
import { Link } from "react-router-dom";
import "../styles/lessons.css";

import HtmlCards from "./HtmlLessonsCards";
import Navbar from "./Navbar";
import Footer from "./Footer";
import tasksData from "./tasksData";

function HtmlLessons() {
  return (
    <>
      <Navbar />
      <div className='header'>
        <h1>HTML Lessons</h1>
      </div>
      <div className='lessons-cards'>
        {tasksData.HTML.map((task, index) => (
          <Link
            to={`/editor/HTML/${task.taskId}`} 
            key={index}
          >
            <HtmlCards
              header={`Lesson ${index + 1}`}
              img='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/512px-HTML5_Badge.svg.png?20110131171049'
              title={task.taskText}
              author={task.author}
            />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default HtmlLessons;
