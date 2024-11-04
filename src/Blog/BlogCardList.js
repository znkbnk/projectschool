import React from "react";
import styles from "./BlogCard.module.css";
import BlogCard from "./BlogCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogTitle from "./BlogTitle";

const BlogCardList = () => {
  function ScrollToTopOnNavigation() {
    window.scrollTo(0, 0);
    return null;
  }
  const posts = [
    {
      heading: "Dev Essentials: Core Guides & Tools",
      description:
        "Your go-to collection of in-depth guides on essential development tools and techniques. From implementing authentication in React to mastering JavaScript pagination and setting up Google Analytics, these resources provide step-by-step insights to streamline your projects and elevate your skills. Perfect for developers of all levels looking to enhance their productivity and project quality.",
      link: "/devessentials",
    },
    {
      heading: "React FAQs: Essential Questions Answered",
      description:
        "Get clear, concise answers to some of the most frequently asked questions about React. Explore topics like the differences between React and React Native, the async nature of hooks, and the current demand for React developers. This collection provides quick insights for developers of all experience levels, helping you deepen your understanding and make informed decisions in your React journey.",
      link: "/reactexplained",
    },
  ];

  return (
    <div>
      <ScrollToTopOnNavigation />

      <Navbar />
      <BlogTitle />
      <div className={styles.cardMasonry}>
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BlogCardList;
