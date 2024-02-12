import React, { useState, useRef, useEffect } from "react";
import "../styles/section2.css";
import image1 from "../images/pic5.png";
import image2 from "../images/pic6.png";
import image3 from "../images/pic7.png";
import image4 from "../images/pic8.png";

function Section2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "HTML",
      content:
        "text1 Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      imageSrc: image1,
    },
    {
      title: "CSS",
      content:
        "text2 Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      imageSrc: image2,
    },
    {
      title: "React",
      content:
        "text3 Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      imageSrc: image3,
    },
    {
      title: "GSAP",
      content:
        "text4 Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      imageSrc: image4,
    },
  ];
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      handleAnimation();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  const handleAnimation = () => {
    const title = titleRef.current;
    const content = contentRef.current;
    title.classList.add("left");
    content.classList.add("fade");
    setTimeout(() => {
      title.classList.remove("left");
      content.classList.remove("fade");
    }, 700);
  };

  return (
    <div className='slide-container'>
      <div className='slide'>
        <div className='slide__title'>
          <h1 ref={titleRef}>{slides[currentSlide].title}</h1>
        </div>
        <div className='slide__content' ref={contentRef}>
          <div className='slide__image'>
            <img src={slides[currentSlide].imageSrc} alt='Slide' />
          </div>
          <div className='slide__content--para'>
            <p>{slides[currentSlide].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
