// HtmlLessonsCards.js
import React from "react";
import "../styles/lessons.css";

const HtmlLessonsCards = ({ header, img, title, author, onClick }) => {
  return (
    <div className='lessons-card' onClick={onClick}>
      <h3>{header}</h3>
      <img src={img} alt={title} />
      <div className='lessons-card-body'>
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <h5>{author}</h5>
      </div>
    </div>
  );
};

export default HtmlLessonsCards;
