import React, { useEffect, useRef } from "react";
import { gsap, Back } from "gsap";
import "../styles/welcomeWord.css";

const InterviewQuestionQuizTitle = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    animation();
  }, []);

  const animation = () => {
    const title = titleRef.current;

    if (title) {
      const titleLetters = title.children;

      const tl = gsap.timeline();
      tl.set(titleLetters, { opacity: 0 }).to(titleLetters, {
        opacity: 1,
        duration: 0.5,
        ease: Back.easeOut.config(1.7),
        stagger: 0.05,
      });
    }
  };

  return (
    <div className='exercises-container'>
      <div>
        <h1 className='exercises-title' ref={titleRef}>

          <span>I</span>
          <span>n</span>
          <span>t</span>
          <span>e</span>
          <span>r</span>
          <span>v</span>
          <span>i</span>
          <span>e</span>
          <span>w</span>
          <span className="space"> </span>
          <span>Q</span>
          <span>u</span>
          <span>e</span>
          <span>s</span>
          <span>t</span>
          <span>i</span>
          <span>o</span>
          <span>n</span>
          <span className="space"> </span>

          <span>Q</span>
          <span>u</span>
          <span>i</span>
          <span>z</span>
        

          
        </h1>
      </div>
    </div>
  );
};

export default InterviewQuestionQuizTitle;