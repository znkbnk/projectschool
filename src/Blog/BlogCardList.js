import React from "react";
import styles from "./BlogCard.module.css";
import BlogCard from "./BlogCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogTitle from './BlogTitle';

const BlogCardList = () => {
  const posts = [
    {
      heading: "How To ?",
      description: "Description for Learning React",
      link: "/howto"
    },
    {
      heading: "React Expplained",
      description: "Description for Beginning with JavaScript",
      link: "/reactexplained"
    }
  ];

  return (
    <div>
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