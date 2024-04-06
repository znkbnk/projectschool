import React from "react";
import { Link } from "react-router-dom";
import { blogCards } from "./tasksData";
import "../styles/blog.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlogTitle from './BlogTitle'

function Blog() {
  function ScrollToTopOnNavigation() {
    window.scrollTo(0, 0);
    return null;
  }
  return (
    <div className='blog-container'>
      <ScrollToTopOnNavigation />

      <Navbar />

      <div className='blog-cards'>
        <BlogTitle />

        {blogCards.map((item, index) => (
          <Link key={index} to={`/blog/${item.id}`}>
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
      <Footer />
    </div>
  );
}

export default Blog;
