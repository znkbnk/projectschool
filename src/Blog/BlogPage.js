import React from "react";
import { useParams } from "react-router-dom";
import { blogTopic } from "../data/tasksData";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "./Button";
import "../styles/blogPage.css";

const BlogPage = () => {
  const { id } = useParams();

  const currentBlog = blogTopic.find((item) => item.id === parseInt(id));

  if (!currentBlog) {
    return <div>Blog not found</div>;
  }

  const paragraphs = Object.keys(currentBlog)
    .filter((key) => key.startsWith("paragraph"))
    .map((key) => currentBlog[key]);

  function ScrollToTopOnNavigation() {
    window.scrollTo(0, 0);
    return null;
  }

  return (
    <div className='blogPage'>
      <ScrollToTopOnNavigation />

      <Navbar />
      <div key={currentBlog.id}>
        <div className='goo-container'>
          <section className='page-section'>
            <img src={require(`../images/${currentBlog.image}`)} alt='Author' />
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
          <Button title='Start Practicing' />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
