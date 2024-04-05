import React from "react";
import { useParams } from "react-router-dom";
import { blogTopic } from "./tasksData";
import Footer from "./Footer";
import Navbar from "./Navbar";
import authorBackground from "../images/authorBackground.jpg";
import '../styles/blogPage.css'

const BlogPage = () => {
  const { id } = useParams();

  const currentBlog = blogTopic.find((item) => item.id === parseInt(id));

  if (!currentBlog) {
    return <div>Blog not found</div>;
  }
  return (
    <div className='blogPage'>
      <Navbar />
      <div key={currentBlog.id}>
        <div className='goo-container'>
          <section className='page-section'>
            <img src={authorBackground} alt='sdf' />
            <p>{currentBlog.paragraph1}</p>
          </section>
          <div className='goo-box'>
            <div className='cursor goo-cursor'></div>
          </div>
        </div>

        <section className='page-section'>
          <p>{currentBlog.paragraph2}</p>
        </section>

        <section className='goo-container'>
          <section className='page-section'>
            <p>{currentBlog.paragraph3}</p>
          </section>
          <div className='goo-box'>
            <div className='cursor goo-cursor'></div>
          </div>
        </section>

        <section className='page-section'>
          <p>{currentBlog.paragraph4}</p>
        </section>

        <section className='goo-container'>
          <section className='page-section'>
            <p>{currentBlog.paragraph1}</p>
          </section>
          <div className='goo-box'>
            <div className='cursor goo-cursor'></div>
          </div>
        </section>

        <section className='page-section'>
          <p>{currentBlog.paragraph1}</p>

          <p>{currentBlog.paragraph1}</p>

          <button>Button</button>
        </section>

        <div className='goo-container'>
          <section className='page-section'>
            <p>{currentBlog.paragraph1}</p>
          </section>
          <div className='goo-box'>
            <div className='cursor goo-cursor'></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
