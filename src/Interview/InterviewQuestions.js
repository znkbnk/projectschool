import React, { useEffect, useState } from 'react';
import styles from './interviewQuestions.module.css';
import InterviewQuestionsCard from './InterviewQuestionsCard';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InterviewQuestionsCardsData from '../data/InterviewQuestionsCardsData';
import InterviewQuestionsTitle from './InterviewQuestionsTitle';

const InterviewQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showContentState, setShowContentState] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to get a random index
  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * InterviewQuestionsCardsData.length);
    return randomIndex;
  };

  const handleNextCard = () => {
    const randomIndex = getRandomIndex();
    // Ensure we don't pick the same index as the current one
    if (randomIndex !== activeIndex) {
      setShowContentState(prevState => ({
        ...prevState,
        [activeIndex]: false,
      }));
      setActiveIndex(randomIndex);
    } else {
      // If randomIndex is the same, try again
      handleNextCard();
    }
  };

  const handlePrevCard = () => {
    if (activeIndex > 0) {
      setShowContentState(prevState => ({
        ...prevState,
        [activeIndex]: false,
      }));
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleToggleContent = () => {
    setShowContentState(prevState => ({
      ...prevState,
      [activeIndex]: !prevState[activeIndex],
    }));
  };

  return (
    <div>
      <Navbar />
      <InterviewQuestionsTitle />

      <div className={styles.container}>
        <div className={styles.carousel}>
          {activeIndex > 0 && (
            <button
              className={`${styles.nav} ${styles.left}`}
              onClick={handlePrevCard}
            >
              <TiChevronLeftOutline />
            </button>
          )}

          <div className={styles.cardContainer}>
            <InterviewQuestionsCard
              question={InterviewQuestionsCardsData[activeIndex].question}
              answer={InterviewQuestionsCardsData[activeIndex].answer}
              showContent={showContentState[activeIndex]} 
              onToggleContent={handleToggleContent} 
            />
          </div>

          {activeIndex < InterviewQuestionsCardsData.length - 1 && (
            <button
              className={`${styles.nav} ${styles.right}`}
              onClick={handleNextCard}
            >
              <TiChevronRightOutline />
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InterviewQuestions;
