import React, { useEffect, useRef } from "react";
import { gsap, Back } from "gsap";
import "../styles/welcomeWord.css";
import image1 from "../images/pslogo.png";
import sectionImg2 from "../images/sectionImg2.png";
import sectionImg3 from "../images/sectionImg3.png";
import sectionImg4 from "../images/sectionImg4.png";
import sectionImg7 from "../images/sectionImg7.png";

const WelcomeComponent = () => {
  const welcomeRef = useRef(null);
  const toTheRef = useRef(null);
  const logo = useRef(null);
  const sectionImg3Ref = useRef(null);
  const sectionImg7Ref = useRef(null);
  const sectionImg4Ref = useRef(null);
  const sectionImg2Ref = useRef(null);

  useEffect(() => {
    animation();
  }, []);

  const animation = () => {
    const welcomeTitle = welcomeRef.current;
    const toTheTitle = toTheRef.current;
    const picture = logo.current;
    const sectionImg3Element = sectionImg3Ref.current;
    const sectionImg4Element = sectionImg4Ref.current;
    const sectionImg2Element = sectionImg2Ref.current;
    const sectionImg7Element = sectionImg7Ref.current;

    if (
      welcomeTitle &&
      toTheTitle &&
      picture &&
      sectionImg3Element &&
      sectionImg4Element &&
      sectionImg2Element &&
      sectionImg7Element
    ) {
      const welcomeLetters = welcomeTitle.children;
      const toTheLetters = toTheTitle.children;

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

      tl.set([...welcomeLetters, ...toTheLetters], { opacity: 0 })
        .to(sectionImg4Element, {
          visibility: "visible",
          opacity: 1,
        })
        .to([...welcomeLetters, ...toTheLetters], {
          opacity: 1,
          duration: 0.2,
          ease: Back.easeOut.config(1),
          stagger: 0.1,
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
    x: screenWidth - 100,
    y: 260,
    rotation: 20,
    duration: 1.5,
    ease: "linear",
    onComplete: () => {
      // After animation is complete, remove the element
      sectionImg2Element.remove();
    },
  },
  "-=1.5"
)
        .to(
          picture,
          {
            visibility: "visible",
            opacity: 1,
          },
          "-=0.5"
        ); 
    }
  };

  return (
    <div className='word-container'>
      <div className="twoWords">
        <div className='welcomeWord'>
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
        <div className='toTheWord'>
          <h1 className='word-title' ref={toTheRef}>
            <span>t</span>
            <span>o</span>
            <span>&nbsp;</span>
            <span>t</span>
            <span>h</span>
            <span>e</span>
          </h1>
        </div>
      </div>

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
        ></img>
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
