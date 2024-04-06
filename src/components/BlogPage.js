import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogTopic } from "./tasksData";
import Footer from "./Footer";
import Navbar from "./Navbar";
import authorBackground from "../images/authorBackground.jpg";
import "../styles/blogPage.css";

const BlogPage = () => {
  const { id } = useParams();

  const currentBlog = blogTopic.find((item) => item.id === parseInt(id));

  if (!currentBlog) {
    return <div>Blog not found</div>;
  }

  // Extract all paragraphs dynamically
  const paragraphs = Object.keys(currentBlog)
    .filter((key) => key.startsWith("paragraph"))
    .map((key) => currentBlog[key]);

  return (
    <div className='blogPage'>
      <Navbar />
      <div key={currentBlog.id}>
        <div className='goo-container'>
          <section className='page-section'>
            <img src={authorBackground} alt='sdf' />
            <p>{paragraphs[0]}</p>
          </section>
        </div>

        {/* Render other paragraphs */}
        {paragraphs.slice(1, -1).map((paragraph, index) => (
          <section
            key={`paragraph-${index + 2}`}
            className={`page-section ${index % 2 === 0 ? "even-bg" : ""}`}
          >
            {Array.isArray(paragraph) ? (
              <ul>
                {paragraph.map((item, idx) => (
                  <li key={`list-item-${idx}`}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{paragraph}</p>
            )}
          </section>
        ))}

        <section className='page-section'>
          <p>{paragraphs[paragraphs.length - 1]}</p>
          <Link to='/editor'>
            <button>Start Practice</button>
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
