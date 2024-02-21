import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../styles/exercises.css";

const Card = ({ img, title, desc, to }) => {
  return (
    <div className='exercises-card'>
      <div className='exercises-card__body'>
        <img src={img} className='exercises-card__image' alt={title} />
        <h2 className='exercises-card__title'>{title}</h2>
        <p className='exercises-card__description'>{desc}</p>
      </div>
      <Link to={to} className='exercises-card__btn'>
        Button
      </Link>
    </div>
  );
};

export default Card;
