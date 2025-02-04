import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/welcomeWord.css";
import image1 from "../images/pslogo.webp";
import sectionImg2 from "../images/sectionImg2.webp";
import sectionImg3 from "../images/sectionImg3.webp";
import sectionImg4 from "../images/sectionImg4.webp";
import sectionImg7 from "../images/sectionImg7.webp";
import pslogosmall from "../images/pslogosmall.webp";
import CrazyScrollPhrase from "./CrazyScrollPhrase";

const WelcomeComponent = () => {
  const logo = useRef(null);
  const pslogosmallRef = useRef(null); // New ref for pslogosmall
  const sectionImg3Ref = useRef(null);
  const sectionImg7Ref = useRef(null);
  const sectionImg4Ref = useRef(null);
  const sectionImg2Ref = useRef(null);

  useEffect(() => {
    animation();
  }, []);

  const animation = () => {
    const sectionImg3Element = sectionImg3Ref.current;
    const sectionImg4Element = sectionImg4Ref.current;
    const sectionImg2Element = sectionImg2Ref.current;
    const sectionImg7Element = sectionImg7Ref.current;

    if (
      sectionImg3Element &&
      sectionImg4Element &&
      sectionImg2Element &&
      sectionImg7Element
    ) {
      gsap.set(sectionImg2Element, {
        opacity: 0.7,
      });

      const tl = gsap.timeline();
      const screenWidth = window.innerWidth;

      tl.to(sectionImg4Element, {
        opacity: 1,
      })
        .to(
          sectionImg3Element,
          {
            opacity: 1,
            top: "50%",
            duration: 1,
            ease: "linear",
          },
          "-=1"
        )
        .to(
          sectionImg7Element,
          {
            opacity: 1,
          },
          "-=0"
        )
        .to(
          sectionImg2Element,
          {
            opacity: 1,
            x: screenWidth,
            y: 360,
            rotation: 20,
            duration: 1.5,
            ease: "linear",
            onComplete: () => {
              gsap.set(sectionImg2Element, { display: "none" });
            },
          },
          "-=1"
        );
    }
  };

  return (
    <div className="word-container">
      <img
        src={sectionImg4}
        alt="section 4"
        className="sectionImg4"
        ref={sectionImg4Ref}
      />

      <div className="sectionImages-container">
        <img
          src={sectionImg7}
          alt="section 7"
          className="sectionImg7"
          ref={sectionImg7Ref}
        />
        <img
          src={sectionImg2}
          alt="section 2"
          className="sectionImg2"
          ref={sectionImg2Ref}
        />
        <img
          src={sectionImg3}
          alt="section 3"
          className="sectionImg3"
          ref={sectionImg3Ref}
        />
        <img
          className="projectschoolImg"
          src={image1}
          alt="Project School logo"
          ref={logo}
        />
      </div>

      {/* Preloaded and eagerly loaded pslogosmall */}
      <img
        src={pslogosmall}
        alt="Project School logo small"
        className="pslogosmall"
        ref={pslogosmallRef}
      />

      <CrazyScrollPhrase />
    </div>
  );
};

export default WelcomeComponent;