// HtmlLessonsCards.js
import React from "react";
import "../styles/lessons.css";



const HtmlLessonsCards = ({
  header,
  img,
  title,
  author,
  onClick,
  introduction,
}) => {
  return (
    <div>
      <div className='lessons-card' onClick={onClick}>
        <h3>{header}</h3>
        <img src={img} alt={title} />
        <div className='lessons-card-body'>
          <h3>{title}</h3>
          <p>{introduction}</p>
          <h5>{author}</h5>
        </div>
      </div>
    </div>
  );
};

export default HtmlLessonsCards;
