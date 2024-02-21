import React from "react";
import "../styles/lessons.css";

import HtmlCards from "./LessonsCards";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ReactLessons() {
  return (
    <>
      <Navbar />
      <div className='header'>
        <h1>React Lessons</h1>
      </div>
      <div className='lessons-cards'>
        <HtmlCards
          header='Lesson 1'
          img='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          title='Title 1'
          author='Author'
        />{" "}
        <HtmlCards
          header='Lesson 2'
          img='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          title='Title 2'
          author='Author'
        />{" "}
        <HtmlCards
          header='Lesson 3'
          img='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          title='Title 3'
          author='Author'
        />{" "}
        <HtmlCards
          header='Lesson 4'
          img='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          title='Title 4'
          author='Author'
        />
        <HtmlCards
          header='Lesson 5'
          img='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
          title='Title 5'
          author='Author'
        />
      </div>
      <Footer />
    </>
  );
}

export default ReactLessons;
