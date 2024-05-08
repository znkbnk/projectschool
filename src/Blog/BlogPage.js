import React from "react";
import { useParams } from "react-router-dom";
import { blogTopic } from "../data/tasksData"; // Assuming you have imported your blog data
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "./Button";
import "../styles/blogPage.css";

const BlogPage = () => {
  const { id } = useParams();

  // Find the current blog
  const currentBlog = blogTopic.find((item) => item.id === parseInt(id));

  if (!currentBlog) {
    return <div>Blog not found</div>;
  }

  // Render the BlogPage
  return (
    <div className='blogPage'>
      <ScrollToTopOnNavigation />
      <Navbar />
      <div key={currentBlog.id} className='goo-container'>
        {/* Render the first image */}
        <section className='page-section'>
          <img src={require(`../images/${currentBlog.image}`)} alt='First' />
        </section>

        {/* Render paragraphs */}
        {currentBlog.paragraphs.map((paragraph, index) => (
          <section
            key={`paragraph-${index}`}
            className={`page-section ${index % 2 === 0 ? "even-bg" : ""}`}
          >
            {paragraph.isList ? (
              <ul>
                {paragraph.text.map((item, idx) => (
                  <li key={`list-item-${idx}`}>{item}</li>
                ))}
              </ul>
            ) : (
              <>
                <p>{paragraph.text}</p>
                {paragraph.image && <img src={paragraph.image} alt='' />}
              </>
            )}
          </section>
        ))}
        <section className='page-section'>
          <Button title='Start Practicing' />
        </section>
      </div>
      <Footer />
    </div>
  );
};

// ScrollToTopOnNavigation component
function ScrollToTopOnNavigation() {
  window.scrollTo(0, 0);
  return null;
}

export default BlogPage;
