import React from "react";
import styles from "./BlogCard.module.css";
import { Link } from "react-router-dom";


const BlogCard = ({ heading, date, description, src, link }) => {
  return (
    <li className={styles.cardContainer}>
      <div className={styles.cardContainerContent}>
        <h3 className={styles.cardHeaderTitle}>{heading}</h3>
        <p className={styles.cardMainText}>{description}</p>
        <Link to={link} className={styles.cardButton}>
          Read more
        </Link>
      </div>
    </li>
  );
};

export default BlogCard;
