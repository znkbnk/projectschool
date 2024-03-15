import React from "react";
import "../styles/author.css";
import imageBackground from "../images/authorBackground.jpg";

const AuthorProfile = ({ author }) => {
  const { name, description, picture, position } = author;

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
                src={picture.medium}
                alt={`${name.first} ${name.last}`}
              />

              <div className='headertext'></div>
              <h2 className='title'>{`${name.first} ${name.last}`}</h2>

              <p className='status'>{`${position}`}</p>
            </div>

            <p className='description'>{`${description}`}</p>
            <div className='social-container'>
              <a href='/'>
                <button className='k2-button'>❮❮ Lessons</button>
              </a>

              <div className='k2-social'>
                <a href='/'>
                  <i className='fab fa-facebook'></i>
                </a>
                <a href='/'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a href='/'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a href='/'>
                  <i className='fab fa-codepen'></i>
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
