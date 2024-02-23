import React, { useState } from "react";
import "../styles/login.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const [currentView, setCurrentView] = useState("logIn");

  const changeView = (view) => {
    setCurrentView(view);
  };

  return (
    <div className='login-container'>
      <Navbar />

      <section id='entry-page'>
        <form>
          <h2>Welcome Back!</h2>
          <fieldset>
            <legend>Log In</legend>
            <ul>
              <li>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' required />
              </li>
              <li>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' required />
              </li>
              <li>
                <i />
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    changeView("PWReset");
                  }}
                  href='/'
                >
                  Forgot Password?
                </a>
              </li>
            </ul>
          </fieldset>
          <button>Login</button>
          <Link to='/signup'>
            <button className='login-button' type='button'>
              Create an Account
            </button>
          </Link>
        </form>

        {currentView === "PWReset" && (
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
            <button type='button' onClick={() => changeView("logIn")}>
              Go Back
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Login;
