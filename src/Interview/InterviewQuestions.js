import React, { useState } from 'react';
import styles from './interviewQuestions.module.css';
import InterviewQuestionsCard from './InterviewQuestionsCard';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'https://cdn.skypack.dev/react-icons@4.12.0/ti';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InterviewQuestionsCardsData from '../data/InterviewQuestionsCardsData';
import InterviewQuestionsTitle from "./InterviewQuestionsTitle";
import InterviewQuestionsSearch from './InterviewQuestionsSearch';

const MAX_VISIBILITY = 3;

const InterviewQuestions = () => {
  const [activeRandom, setActiveRandom] = useState(0);
  const [activeList, setActiveList] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showContentState, setShowContentState] = useState({});

  function ScrollToTopOnNavigation() {
    window.scrollTo(0, 0);
    return null;
  }

  // Filter cards based on the search term
  const filteredCards = InterviewQuestionsCardsData.filter(card =>
    card.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to get a random card index
  const getRandomIndex = (length) => Math.floor(Math.random() * length);

  // Function to handle card navigation
  const handleNextCard = (isListMode) => {
    if (isListMode) {
      if (activeList < filteredCards.length - 1) {
        setActiveList(activeList + 1);
        setShowContentState({}); // Reset the show answer state on navigation
      }
    } else {
      setActiveRandom(getRandomIndex(InterviewQuestionsCardsData.length));
      setShowContentState({}); // Reset the show answer state on navigation
    }
  };

  const handlePrevCard = (isListMode) => {
    if (isListMode) {
      if (activeList > 0) {
        setActiveList(activeList - 1);
        setShowContentState({}); // Reset the show answer state on navigation
      }
    } else {
      setActiveRandom(getRandomIndex(InterviewQuestionsCardsData.length));
      setShowContentState({}); // Reset the show answer state on navigation
    }
  };

  const handleToggleContent = (index) => {
    setShowContentState(prevState => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the visibility for the specific card
    }));
  };

  const renderCards = (isListMode) => {
    const cardsToRender = isListMode ? filteredCards : [InterviewQuestionsCardsData[activeRandom]];

    return cardsToRender.map((card, i) => (
      <div
        key={i}
        className={styles.cardContainer}
        style={{
          '--active': isListMode ? i === activeList ? 1 : 0 : 1,
          '--offset': (activeList - i) / 3,
          '--direction': Math.sign(activeList - i),
          '--abs-offset': Math.abs(activeList - i) / 3,
          opacity: isListMode && Math.abs(activeList - i) >= MAX_VISIBILITY ? '0' : '1',
          display: isListMode && Math.abs(activeList - i) > MAX_VISIBILITY ? 'none' : 'block',
        }}
      >
        <InterviewQuestionsCard
          question={card.question}
          answer={card.answer}
          showContent={showContentState[i]} // Pass the state to each card
          onToggleContent={() => handleToggleContent(i)} // Toggle function
        />
      </div>
    ));
  };

  const isListMode = searchTerm.length > 0;

  return (
    <div>
      <ScrollToTopOnNavigation />

      <Navbar />
      <InterviewQuestionsTitle />
      <InterviewQuestionsSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className={styles.container}>
        <div className={styles.carousel}>
          {isListMode ? (
            <>
              {activeList > 0 && (
                <button
                  className={`${styles.nav} ${styles.left}`}
                  onClick={() => handlePrevCard(true)}
                >
                  <TiChevronLeftOutline />
                </button>
              )}
              {renderCards(true)}
              {activeList < filteredCards.length - 1 && (
                <button
                  className={`${styles.nav} ${styles.right}`}
                  onClick={() => handleNextCard(true)}
                >
                  <TiChevronRightOutline />
                </button>
              )}
            </>
          ) : (
            <>
              {activeRandom > 0 && (
                <button
                  className={`${styles.nav} ${styles.left}`}
                  onClick={() => handlePrevCard(false)}
                >
                  <TiChevronLeftOutline />
                </button>
              )}
              {renderCards(false)}
              <button
                className={`${styles.nav} ${styles.right}`}
                onClick={() => handleNextCard(false)}
              >
                <TiChevronRightOutline />
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InterviewQuestions;
