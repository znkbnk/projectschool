// Articles.js
import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../data/articlesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/articles.css";

const Articles = () => {
  const { id } = useParams(); 
  const article = articles.find((article) => article.id === id);


  function ScrollToTopOnNavigation() {
    window.scrollTo(0, 0);
    return null;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <ScrollToTopOnNavigation />

      <Navbar />
      <main>
        <div id='articles-main' className="wrapper">
          <article key={article.id}>
            <section className='articles-section'>
              <h1>{article.title}</h1>
              <img src={article.image} alt={article.title} />
              {article.paragraphs && Array.isArray(article.paragraphs) ? (
                <>
                  {article.paragraphs.map((paragraph, index) => (
                    <div key={index}>
                      {paragraph.type === "text" && (
                        <p>{paragraph.content}</p>
                      )}
                      {paragraph.type === "list" && (
                        <ul>
                          {paragraph.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {paragraph.type === "image" && (
                        <img src={paragraph.src} alt={paragraph.alt} />
                      )}
                    </div>
                  ))}
                </>
              ) : (
                <p>{article.content}</p>
              )}
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
