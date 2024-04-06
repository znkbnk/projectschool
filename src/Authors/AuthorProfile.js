import React from "react";
import "../styles/author.css";
import imageBackground from "../images/authorBackground.jpg";
import { Link } from "react-router-dom";

const AuthorProfile = ({ author }) => {
  const { name, description, position, picture } = author;

  return (
    <div>
      <ul className='author-card-list'>
        <li className='author-card'>
          <img src={imageBackground} className='image' alt='' />
          <div className='overlay'>
            <div className='header'>
              <svg className='arc' xmlns='http://www.w3.org/2000/svg'>
                <path />
              </svg>

              <img
                className='thumb'
                src={picture.medium} // Use authorImage here
                alt={`${name.first} ${name.last}`}
              />

              <div className='headertext'></div>
              <h2 className='title'>{`${name.first} ${name.last}`}</h2>

              <p className='status'>{`${position}`}</p>
            </div>

            <p className='description'>{`${description}`}</p>
            <div className='social-container'>
              <Link to='/exercises'>
                <button className='k2-button'>❮❮ Lessons</button>
              </Link>

              <div className='k2-social'>
                <a href='https://instagram.com/znkbnk'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a href='https://github.com/znkbnk'>
                  <i className='fa-brands fa-github'></i>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AuthorProfile;
