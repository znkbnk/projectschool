import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { articles } from "../data/articlesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/articles.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Articles = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = (code, index) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopiedIndex(index); // Set the index of the copied code block
        setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <Navbar />
      <main>
        <div id='articles-main' className='wrapper'>
          <article key={article.id}>
            <section className='articles-section'>
              <h1>{article.title}</h1>
              <img src={article.image} alt={article.title} />
              {article.paragraphs && Array.isArray(article.paragraphs) ? (
                <>
                  {article.paragraphs.map((paragraph, index) => (
                    <div key={index}>
                      {paragraph.type === "text" && <p>{paragraph.content}</p>}
                      {paragraph.type === "title" && (
                        <h2 className='article-title'>{paragraph.content}</h2>
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
                      {paragraph.type === "code" && (
                        <div className='code-container-article'>
                          <SyntaxHighlighter language='javascript' style={dark}>
                            {paragraph.content}
                          </SyntaxHighlighter>
                          <button
                            className={`button-84 ${
                              copiedIndex === index ? "copied" : ""
                            }`}
                            onClick={() => handleCopy(paragraph.content, index)} // Pass the index here
                          >
                            {copiedIndex === index ? "Copied!" : "Copy Code"}
                          </button>
                        </div>
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
