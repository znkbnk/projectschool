import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/welcomeWord.css";
import image1 from "../images/pslogo.webp";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const MobileMessage = () => {
  const logo = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    window.addEventListener("load", animation);
    return () => {
      window.removeEventListener("load", animation);
    };
  }, []);

  const animation = () => {
    const picture = logo.current;

    if (picture) {
      gsap.set(picture, {
        opacity: 0,
        visibility: "hidden",
      });

      const tl = gsap.timeline();

      tl.to(picture, {
        visibility: "visible",
        opacity: 1,
        duration: 0.5,
      });
    }
  };

  // Function to handle the "Back" button click
  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className='word-container'>
      <button className='button-84' onClick={handleBackClick}>
        Back
      </button>

      <div
        style={{ textAlign: "center", padding: "50px", fontSize: "2rem" }}
        className='important-red'
      >
        <h3>
          Please use a desktop or laptop for a better learning experience.
        </h3>
      </div>

      <img
        className='pslogosmall'
        src={image1}
        alt='projectschool.dev Logo'
        ref={logo}
      ></img>
    </div>
  );
};

export default MobileMessage;
