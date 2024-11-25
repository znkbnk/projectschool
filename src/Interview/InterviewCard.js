import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './interview.module.css';

const InterviewCard = ({ img, title, desc, to }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  // Update mobile flag on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='exercises-card'>
      <div className='exercises-card__body'>
        <img src={img} className='exercises-card__image' alt={title} />
        <h2 className='exercises-card__title'>{title}</h2>
        <p className='exercises-card__description'>{desc}</p>
        <Link
          to={isMobile ? '/mobile-message' : to}
          className='exercises-card__btn'
        >
          Start
        </Link>
      </div>
    </div>
  );
};

export default InterviewCard;
