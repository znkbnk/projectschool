// Blog.js
import React from "react";
import { Link } from "react-router-dom";
import { blogCards } from "../data/articlesData";

import "../styles/blog.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HowToTitle from "./HowToTitle";

function HowTo() {
  function ScrollToTopOnNavigation() {
    window.scrollTo(0, 0);
    return null;
  }

  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />
    <div className='blog-container'>
      
      <div className='blog-cards'>
        <HowToTitle />
        <div className="cards-flex"> 
          {blogCards.map((item, index) => (
            <Link key={index} to={`/articles/${item.id}`}>
              <div className={`card-container ${item.category}`}>
                <div className='card-category'>{item.category}</div>
                <div className='card-body'>
                  <div className='card-content'>
                    <div className='card-title'>{item.title}</div>
                    <div className='card-extract'>{item.extract}</div>
                    <div className='card-date'>{item.date}</div>
                  </div>
                  <img src={item.image} alt='' className='card-thumb' />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <Footer />

    </div>
  );
}

export default HowTo;
