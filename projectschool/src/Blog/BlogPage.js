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

    const getImagePath = (imageName) => {
      return require(`../images/${imageName}`);
    };

    const firstImage = currentBlog.image && getImagePath(currentBlog.image[0]);


  return (
    <div className='blogPage'>
      <ScrollToTopOnNavigation />
      <Navbar />
      <div key={currentBlog.id} className='goo-container'>
        <section className='page-section'>
          {firstImage && <img src={firstImage} alt='First' />}
        </section>

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
                {paragraph.text &&
                  paragraph.text.map((text, idx) => (
                    <p key={`text-${idx}`}>{text}</p>
                  ))}
                {paragraph.images &&
                  paragraph.images.map((image, idx) => (
                    <img
                      key={`image-${idx}`}
                      className='paragraph-image'
                      src={image}
                      alt=''
                    />
                  ))}
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

function ScrollToTopOnNavigation() {
  window.scrollTo(0, 0);
  return null;
}

export default BlogPage;
