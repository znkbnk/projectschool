import { Link } from "react-router-dom";
import "../styles/footer.css";
import "@fortawesome/fontawesome-free/css/all.css";

function Footer() {
  return (
    <footer id='footer'>
      <div className='main-footer'>
        <div className='logoinfo' data-aos='fade-up'>
          <div className='contact-details'>
            <h1>Contact Us</h1>
            <ul>
              <li>
                <div className='fa fa-envelope'></div>
                <a href='mailto:yourmail@gmail.com'>projectschoolhelp@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='info' data-aos='fade-up'>
          <h1>Legals</h1>
          <div className='sociallogos'>
            <div className='logobox'>
              <Link
                to='/terms'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-instagram'></i>
              </Link>
            </div>
          </div>
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
                href='https://github.com/znkbnk'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa-brands fa-github'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>© 2024 All Rights Reserved</div>
    </footer>
  );
}

export default Footer;
