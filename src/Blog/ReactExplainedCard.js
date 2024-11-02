import React from 'react';
import styles from './ReactExplainedCard.module.css';

const ReactExplainedCard = ({ title, content }) => {
  const cardHeight = content.length > 200 ? 'auto' : '100%';

  return (
    <div className={styles.card} style={{ height: cardHeight }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ReactExplainedCard;
