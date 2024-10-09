import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/welcomeWord.css";
import image1 from "../images/pslogo.webp";
import sectionImg2 from "../images/sectionImg2.webp";
import sectionImg3 from "../images/sectionImg3.webp";
import sectionImg4 from "../images/sectionImg4.webp";
import sectionImg7 from "../images/sectionImg7.webp";
import SimplifiedWelcomeComponent from "./SimplifiedWelcomeComponent";

const WelcomeComponent = () => {
  const logo = useRef(null);
  const sectionImg3Ref = useRef(null);
  const sectionImg7Ref = useRef(null);
  const sectionImg4Ref = useRef(null);
  const sectionImg2Ref = useRef(null);

  useEffect(() => {
    window.addEventListener("load", animation);
    return () => {
      window.removeEventListener("load", animation);
    };
  }, []);

  const animation = () => {
    const picture = logo.current;
    const sectionImg3Element = sectionImg3Ref.current;
    const sectionImg4Element = sectionImg4Ref.current;
    const sectionImg2Element = sectionImg2Ref.current;
    const sectionImg7Element = sectionImg7Ref.current;

    if (
      picture &&
      sectionImg3Element &&
      sectionImg4Element &&
      sectionImg2Element &&
      sectionImg7Element
    ) {
      gsap.set(
        [
          sectionImg4Element,
          sectionImg3Element,
          sectionImg2Element,
          sectionImg7Element,
          picture,
        ],
        {
          opacity: 0,
          visibility: "hidden",
        }
      );

      gsap.set(sectionImg2Element, {
        opacity: 0.7,
      });

      const tl = gsap.timeline();
      const screenWidth = window.innerWidth;

      tl.to(sectionImg4Element, {
        visibility: "visible",
        opacity: 1,
      })
        .to(
          sectionImg3Element,
          {
            visibility: "visible",
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
            visibility: "visible",
            opacity: 1,
          },
          "-=0"
        )
        .to(
          sectionImg2Element,
          {
            visibility: "visible",
            opacity: 1,
            x: screenWidth + 100,
            y: 260,
            rotation: 20,
            duration: 1.5,
            ease: "linear",
            onComplete: () => {
              sectionImg2Element.remove();
            },
          },
          "-=1"
        )
        .to(
          picture,
          {
            visibility: "visible",
            opacity: 1,
            duration: 0.5,
          },
          "-=1"
        );
    }
  };

  return (
    <div className='word-container'>
      <SimplifiedWelcomeComponent />
      <img
        src={sectionImg4}
        alt='logo'
        className='sectionImg4'
        ref={sectionImg4Ref}
      ></img>

      <div className='sectionImages-container'>
        <img
          src={sectionImg7}
          alt='logo'
          className='sectionImg7'
          ref={sectionImg7Ref}
        />
        <img
          src={sectionImg2}
          alt='logo'
          className='sectionImg2'
          ref={sectionImg2Ref}
        ></img>
        <img
          src={sectionImg3}
          alt='logo'
          className='sectionImg3'
          ref={sectionImg3Ref}
        ></img>
        <img
          className='projectschoolImg'
          src={image1}
          alt='logo'
          ref={logo}
        ></img>
      </div>
    </div>
  );
};

export default WelcomeComponent;
