import React from "react";
import "../styles/lessons.css";

const HtmlLessonsCards = ({
  header,
  img,
  title,
  authorInfo,
  introduction,
  difficulty,
}) => {
  const { name } = authorInfo;

  return (
    <div>
      <div className='lessons-card'>
        <h3>{header}</h3>
        <img src={img} alt={title} />
        <div className='lessons-card-body'>
          <h3>{title}</h3>
          <p>{introduction}</p>
          <div className='authorDifficulty'>
            <h5>
              Author: {name.first} {name.last}
            </h5>
            <h5>Difficulty: {difficulty}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmlLessonsCards;
