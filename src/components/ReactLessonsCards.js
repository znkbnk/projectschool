import React from 'react'
import "../styles/lessons.css";


const ReactLessonsCards = (props) => {
  return (
    <div className='lessons-card'>
      <h3>{props.header}</h3>
      <img src={props.img} alt={props.title} />
      <div className='lessons-card-body'>
        <h3>{props.title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <h5>{props.author}</h5>
      </div>
    </div>
  );
}

export default ReactLessonsCards;