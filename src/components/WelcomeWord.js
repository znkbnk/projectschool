import React, { useEffect, useRef } from "react";
import { gsap, Back } from "gsap";
import "../styles/welcomeWord.css";
import image1 from "../images/pslogo.png";

const WelcomeComponent = () => {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

   useEffect(() => {
     animation();
   }, []);

 const animation = () => {
   const title = titleRef.current;
   const button = buttonRef.current;

   if (title && button) {
     const titleLetters = title.children;

     const tl = gsap.timeline();
     tl.set(titleLetters, { opacity: 0 })
       .to(button, { visibility: "hidden", opacity: 0 })
       .to(titleLetters, {
         opacity: 1,
         duration: 0.5,
         ease: Back.easeOut.config(1.7),
         stagger: 0.05,
       })
       .to(button, { visibility: "visible", opacity: 1 });
   }
 };


 

  return (
    <div className='word-container'>
      <div>
        <h1 className='word-title' ref={titleRef}>
          <span>W</span>
          <span>e</span>
          <span>l</span>
          <span>c</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
          <span>&nbsp;</span>
          <span>t</span>
          <span>o</span>
          <span>&nbsp;</span>
          <span>t</span>
          <span>h</span>
          <span>e</span>
        </h1>
        
      </div>
      <div className='welcome-logo'>
        <img src={image1} alt='logo' ref={buttonRef}></img>
      </div>
    </div>
  );
};

export default WelcomeComponent;
