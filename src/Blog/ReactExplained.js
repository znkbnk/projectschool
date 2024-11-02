//random cards

import React, { useState } from 'react';
import styles from './ReactExplained.module.css';
import ReactExplainedCard from './ReactExplainedCard';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'https://cdn.skypack.dev/react-icons@4.12.0/ti';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import cardsData from '../data/ReactExplainedCardsData'; 
import ReactExplainedTitle from "./ReactExplainedTitle";


const MAX_VISIBILITY = 3;

const ReactExplained = () => {
  const [active, setActive] = useState(0);

  
  const getRandomIndex = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cardsData.length);
    } while (randomIndex === active);
    return randomIndex;
  };

  return (
    <div>
      <Navbar />
      <ReactExplainedTitle />

      <div className={styles.container}> 
        <div className={styles.carousel}>
          {active > 0 && (
            <button 
              className={`${styles.nav} ${styles.left}`} 
              onClick={() => setActive(getRandomIndex)}
            >
              <TiChevronLeftOutline />
            </button>
          )}
          {cardsData.map((card, i) => (
            <div 
              key={i} 
              className={styles.cardContainer} 
              style={{
                '--active': i === active ? 1 : 0,
                '--offset': (active - i) / 3,
                '--direction': Math.sign(active - i),
                '--abs-offset': Math.abs(active - i) / 3,
                'pointer-events': active === i ? 'auto' : 'none',
                'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
              }}
            >
              <ReactExplainedCard 
                title={card.title}
                content={card.content}
              />
            </div>
          ))}
          {active < cardsData.length - 1 && (
            <button 
              className={`${styles.nav} ${styles.right}`} 
              onClick={() => setActive(getRandomIndex)}
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

export default ReactExplained;











// by list from 0 to 10


// import React, { useState } from 'react';
// import styles from './ReactExplained.module.css';
// import ReactExplainedCard from './ReactExplainedCard';
// import { TiChevronLeftOutline, TiChevronRightOutline } from 'https://cdn.skypack.dev/react-icons@4.12.0/ti';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import cardsData from '../data/ReactExplainedCardsData'; 

// const MAX_VISIBILITY = 3;

// const ReactExplained = () => {
//   const [active, setActive] = useState(0);

//   return (
//     <div>
//       <Navbar />

//       <div className={styles.container}> 
//         <div className={styles.carousel}>
//           {active > 0 && (
//             <button className={`${styles.nav} ${styles.left}`} onClick={() => setActive(i => i - 1)}>
//               <TiChevronLeftOutline />
//             </button>
//           )}
//           {cardsData.map((card, i) => (
//             <div 
//               key={i} 
//               className={styles.cardContainer} 
//               style={{
//                 '--active': i === active ? 1 : 0,
//                 '--offset': (active - i) / 3,
//                 '--direction': Math.sign(active - i),
//                 '--abs-offset': Math.abs(active - i) / 3,
//                 'pointer-events': active === i ? 'auto' : 'none',
//                 'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
//                 'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
//               }}
//             >
//               <ReactExplainedCard 
//                 title={card.title}
//                 content={card.content}
//               />
//             </div>
//           ))}
//           {active < cardsData.length - 1 && (
//             <button className={`${styles.nav} ${styles.right}`} onClick={() => setActive(i => i + 1)}>
//               <TiChevronRightOutline />
//             </button>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ReactExplained;
