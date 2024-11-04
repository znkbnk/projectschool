import React, { useState } from 'react';
import styles from './ReactExplained.module.css';
import ReactExplainedCard from './ReactExplainedCard';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'https://cdn.skypack.dev/react-icons@4.12.0/ti';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import cardsData from '../data/ReactExplainedCardsData';
import ReactExplainedTitle from "./ReactExplainedTitle";
import SearchReactFAQ from './SearchReactFAQ'; // Import the Search component

const MAX_VISIBILITY = 3;

const ReactExplained = () => {
  const [activeRandom, setActiveRandom] = useState(0);
  const [activeList, setActiveList] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  function ScrollToTopOnNavigation() {
    window.scrollTo(0, 0);
    return null;
  }

  // Filter cards based on the search term
  const filteredCards = cardsData.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to get a random card index
  const getRandomIndex = (length) => Math.floor(Math.random() * length);

  // Function to handle card navigation
  const handleNextCard = (isListMode) => {
    if (isListMode) {
      if (activeList < filteredCards.length - 1) {
        setActiveList(activeList + 1);
      }
    } else {
      setActiveRandom(getRandomIndex(cardsData.length));
    }
  };

  const handlePrevCard = (isListMode) => {
    if (isListMode) {
      if (activeList > 0) {
        setActiveList(activeList - 1);
      }
    } else {
      setActiveRandom(getRandomIndex(cardsData.length));
    }
  };

  // Render cards based on mode
  const renderCards = (isListMode) => {
    // Show filtered cards if in list mode, otherwise show a random card
    const cardsToRender = isListMode ? filteredCards : [cardsData[activeRandom]];

    return cardsToRender.map((card, i) => (
      <div
        key={i}
        className={styles.cardContainer}
        style={{
          '--active': isListMode ? i === activeList ? 1 : 0 : 1,
          '--offset': (activeList - i) / 3,
          '--direction': Math.sign(activeList - i),
          '--abs-offset': Math.abs(activeList - i) / 3,
          'pointer-events': isListMode && activeList === i ? 'auto' : 'none',
          'opacity': isListMode && Math.abs(activeList - i) >= MAX_VISIBILITY ? '0' : '1',
          'display': isListMode && Math.abs(activeList - i) > MAX_VISIBILITY ? 'none' : 'block',
        }}
      >
        <ReactExplainedCard
          title={card.title}
          content={card.content}
        />
      </div>
    ));
  };

  // Determine if we are in list mode based on whether there's a search term
  const isListMode = searchTerm.length > 0;

  return (
    <div>
      <ScrollToTopOnNavigation />

      <Navbar />
      <ReactExplainedTitle />
      <SearchReactFAQ searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

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

export default ReactExplained;



