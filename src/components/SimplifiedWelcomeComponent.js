import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SimplifiedWelcomeComponent = () => {
  const welcomeRef = useRef(null);
  const toTheRef = useRef(null);

  useEffect(() => {
    const welcomeLetters = welcomeRef.current.children;
    const toTheLetters = toTheRef.current.children;

    gsap.set([...welcomeLetters, ...toTheLetters], { opacity: 0 });

    gsap.to([...welcomeLetters, ...toTheLetters], {
      opacity: 1,
      duration: 0.2,
      stagger: 0.1,
    });
  }, []);

  return (
    <div className="word-container">
      <div className="twoWords">
        <h1 className="word-title">
          <span ref={welcomeRef}>
            {'Welcome'.split('').map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </span>
          {' '}
          <span ref={toTheRef}>
            {'to the'.split('').map((letter, index) => (
              <span key={index}>{letter === ' ' ? '\u00A0' : letter}</span>
            ))}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SimplifiedWelcomeComponent;