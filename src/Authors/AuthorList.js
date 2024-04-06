import React from "react";
import AuthorProfile from "./AuthorProfile";
import { authorsData } from "../data/tasksData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthorsTitle from "./AuthorsTitle";

const AuthorsList = () => {
  return (
    <div>
      <Navbar />
      <div className='header'>
        <AuthorsTitle />
      </div>
      <div className='author-container'>
        {authorsData.map((author, index) => (
          <AuthorProfile key={index} author={author} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AuthorsList;
