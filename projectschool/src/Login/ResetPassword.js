import React from "react";
import "../styles/login.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div>
      <div className='login-container'>
        <Navbar />

        <section id='entry-page'>
          <form>
            <h2>Reset Password</h2>
            <fieldset>
              <legend>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label htmlFor='email'>Email:</label>
                  <input type='email' id='email' required />
                </li>
              </ul>
            </fieldset>
            <button>Send Reset Link</button>
            <Link to='/login'>
              <button className='login-button' type='button'>
                Go Back
              </button>
            </Link>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
