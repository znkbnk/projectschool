import React from "react";
import "../styles/author.css";
import imageBackground from "../images/authorBackground.webp";
import { Link } from "react-router-dom";

const AuthorProfile = ({ author }) => {
  const { name, description, position, picture, social } = author;

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

              <p className='status'>{position}</p>
            </div>

            <div className='description-container'>
              <p className='description'>{description}</p>
            </div>
            <div className='social-container'>
              <Link to='/exercises'>
                <button className='k2-button'>❮❮ Lessons</button>
              </Link>

              <div className='k2-social'>
                <div>
                  <div className='sociallogos'>
                    <div className='logobox'>
                      {social.instagram && (
                        <a
                          href={social.instagram}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={`Visit Instagram profile of ${name.first}`}
                        >
                          <i className='fab fa-instagram'></i>
                        </a>
                      )}
                      {social.github && (
                        <a
                          href={social.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={`Visit GitHub profile of ${name.first}`}
                        >
                          <i className='fa-brands fa-github'></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AuthorProfile;
