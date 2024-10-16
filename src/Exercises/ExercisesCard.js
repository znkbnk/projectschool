import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/exercises.css';

const Card = ({ img, title, desc, to }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  // Update mobile flag on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleStartClick = (event) => {
    event.preventDefault();
    navigate(isMobile ? '/mobile-message' : to);
  };

  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  return (
    <div className='exercises-card'>
      <div className='exercises-card__body'>
        <img src={img} className='exercises-card__image' alt={title} />
        <h2 className='exercises-card__title'>{title}</h2>
        <p className='exercises-card__description'>{desc}</p>
      </div>
      <button
        className='exercises-card__btn'
        onClick={(e) => {
          createRipple(e);
          handleStartClick(e);
        }}
      />
    </div>
  );
};

export default Card;
