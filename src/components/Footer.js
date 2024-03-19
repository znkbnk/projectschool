import { Link } from "react-router-dom";
import "../styles/footer.css";
import "@fortawesome/fontawesome-free/css/all.css";


function Footer() {
  
  return (
    <footer id='footer'>
      <div className='main-footer'>
        <div className='logoinfo' data-aos='fade-up'>
          <h2>Responsive Footer</h2>
          <div className='contact-details'>
            <h1>Contact Us</h1> 
            <ul>
              <li>
                <div className='fa fa-phone'></div>
                <a href='tel:+91'>+44 7xxxxxxxxxx</a>
              </li>
              <li>
                <div className='fa fa-envelope'></div>
                <a href='mailto:yourmail@gmail.com'>yourmail@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='com' data-aos='fade-up'>
          <h1>About</h1>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='info' data-aos='fade-up'>
          <h1>Social Media</h1>
          <div className='sociallogos'>
            <div className='logobox'>
              <a
                href='https://instagram.com/znkbnk'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-instagram'></i>
              </a>
              <a
                href='your_linkedin_link_here'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-linkedin'></i>
              </a>
              <a
                href='your_youtube_link_here'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-youtube'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">© Your Copyright 2024 All Rights Reserved</div>
    </footer>
  );
}

export default Footer;
