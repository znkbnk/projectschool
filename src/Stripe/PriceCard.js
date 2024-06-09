import React from 'react';
import '../styles/checkout.css';

const PriceCard = ({ title, price, advantages, buttonText, trialDays, onButtonClick }) => {
  // Check if the title is "Free"
  const isFree = title === "Free";

  return (
    <div className="card-wrapper">

      <div className="card-header">
        <h2 className="card-title">{title}</h2>
      </div>
      <div className={`card-price ${isFree ? 'free' : title.toLowerCase()}`}>
        <p>
          <sup>£ </sup>
          <span className="price-number">{price}</span>
        </p>
      </div>
      <div className="advantages-list">
        {advantages.map((advantage, index) => (
          <span
            className={`advantage-item secondary-text ${isFree && index >= advantages.length - 2 ? 'crossed-text' : ''}`}
            key={index}
          >
            {advantage}
          </span>
        ))}
      </div>
      <div className="card-footer">
        <button className="card-button" onClick={onButtonClick}>{buttonText}</button>
        <span className="card-trial-text secondary-text">{trialDays}</span>
      </div>
    </div>
  );
};

export default PriceCard;
