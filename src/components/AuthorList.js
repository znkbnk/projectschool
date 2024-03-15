import React from "react";
import AuthorProfile from "./AuthorProfile";
import { authorsData } from "./tasksData"; 
import Navbar from "./Navbar";
import Footer from "./Footer";

const AuthorsList = () => {
  return (
    <div>
      <Navbar />

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
