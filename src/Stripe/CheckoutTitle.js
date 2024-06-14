import React, { useEffect, useRef } from "react";
import { gsap, Back } from "gsap";
import "../styles/welcomeWord.css";

const CheckoutTitle = () => {
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
      <h1>Test page, u wont be charged, doesnt work anyway</h1>
        <h1 className='exercises-title' ref={titleRef}>
        

        {/* <span>C</span>
          <span>h</span>
          <span>e</span>
          <span>c</span>
          <span>k</span>
          <span>o</span>
          <span>u</span>
          <span>t</span> */}
        </h1>
      </div>
    </div>
  );
};

export default CheckoutTitle;
