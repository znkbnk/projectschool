import React, { useEffect, useRef } from "react";
import FaqItem from "./FaqItem"; 
import { gsap, Back } from "gsap"; 

import {faqData} from "./tasksData"; 
import '../styles/faq.css'
import Navbar from "./Navbar";
import Footer from "./Footer";

const Faq = () => {
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
    <div>
      <Navbar />
      <div className='faq-container'>
        <div>
          <h1 className='faq-title' ref={titleRef}>
            <span>F</span>
            <span>A</span>
            <span>Q</span>
          </h1>
          <h1>Frequently asked questions</h1>
        </div>
      </div>
      <div className='faqContainer'>
        <div className='headerWrapper'>
          {faqData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq; 
