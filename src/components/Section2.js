import React, { useState, useRef, useEffect } from "react";
import "../styles/section2.css";
import image1 from "../images/pic5.png";
import image2 from "../images/pic6.png";
import image3 from "../images/pic7.png";

function Section2() {
  const [currentSlide, setCurrentSlide] = useState(0);
 const slides = [
   {
     title: "Project Showcase",
     content: (
       <>
         <ul>
           <li>
             Display featured projects or case studies completed by students.
           </li>
           <li>
             Highlight the practical skills and knowledge gained through the
             course.
           </li>
           <li>
             Showcase visually appealing screenshots or thumbnails of the
             projects.
           </li>
         </ul>
       </>
     ),
     imageSrc: image1,
   },
   {
     title: "Testimonials and Success Stories",
     content: (
       <>
         <ul>
           <li>
             Share testimonials from past students who have benefited from the
             practical approach of the program.
           </li>
           <li>
             Include success stories or anecdotes about how hands-on learning
             has made a difference in their careers or projects.
           </li>
           <li>
             Use quotes or short excerpts to convey the impact of the course on
             students learning experiences.
           </li>
         </ul>
       </>
     ),
     imageSrc: image2,
   },
   {
     title: "Upcoming Events or Workshops",
     content: (
       <>
         <ul>
           <li>
             Promote upcoming events, workshops, or guest lectures related to
             HTML, CSS, and React.
           </li>
           <li>
             Provide brief descriptions of the topics covered and highlight the
             benefits of participation.
           </li>
           <li>
             Include links or buttons for students to learn more or register for
             the events.
           </li>
         </ul>
       </>
     ),
     imageSrc: image3,
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
            {slides[currentSlide].content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
