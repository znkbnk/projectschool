import React, { useEffect, useRef } from "react";
import { gsap, Back } from "gsap";
import "../styles/welcomeWord.css";
import image1 from "../images/pslogo.png";

const WelcomeComponent = () => {
  const welcomeRef = useRef(null); // Ref for the "Welcome" h1
  const toTheRef = useRef(null); // Ref for the "to the" h1
  const pictureRef = useRef(null);

  useEffect(() => {
    animation();
  }, []);

  const animation = () => {
    const welcomeTitle = welcomeRef.current;
    const toTheTitle = toTheRef.current;
    const picture = pictureRef.current;

    if (welcomeTitle && toTheTitle && picture) {
      const welcomeLetters = welcomeTitle.children;
      const toTheLetters = toTheTitle.children;

      const tl = gsap.timeline();
      tl.set([...welcomeLetters, ...toTheLetters], { opacity: 0 })
        .to(picture, { visibility: "hidden", opacity: 0 })
        .to([...welcomeLetters, ...toTheLetters], {
          opacity: 1,
          duration: 0.5,
          ease: Back.easeOut.config(1.7),
          stagger: 0.05,
        })
        .to(picture, { visibility: "visible", opacity: 1 });
    }
  };

  return (
    <div className='word-container'>
      <div>
        <h1 className='word-title' ref={welcomeRef}>
          <span>W</span>
          <span>e</span>
          <span>l</span>
          <span>c</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
        </h1>
      </div>
      <div>
        <h1 className='word-title' ref={toTheRef}>
          <span>t</span>
          <span>o</span>
          <span>&nbsp;</span>
          <span>t</span>
          <span>h</span>
          <span>e</span>
        </h1>
      </div>
      <div className='welcome-logo'>
        <img src={image1} alt='logo' ref={pictureRef}></img>
      </div>
    </div>
  );
};

export default WelcomeComponent;
