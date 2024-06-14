import React, { useEffect, useRef } from "react";
import { gsap, Back } from "gsap";
import "../styles/welcomeWord.css";

const JsTitle = () => {
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
          <span>J</span>
          <span>a</span>
          <span>v</span>
          <span>a</span>
          <span>S</span>
          <span>c</span>
          <span>r</span>
          <span>i</span>
          <span>p</span>
          <span>t</span>
        </h1>
      </div>
    </div>
  );
};

export default JsTitle;
