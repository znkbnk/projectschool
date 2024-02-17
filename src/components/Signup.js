import React, { useState } from "react";
import "../styles/login.css";
import Navbar from "./Navbar";

const Signup = () => {
  const [currentView, setCurrentView] = useState("signUp");

  const changeView = (view) => {
    setCurrentView(view);
  };

  return (
     <div className="login-container">
      <Navbar />
    <section id='entry-page'>
      {currentView === "signUp" && (
        <form>
          <h2>Sign Up!</h2>
          <fieldset>
            <legend>Create Account</legend>
            <ul>
              <li>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' required />
              </li>
              <li>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' required />
              </li>
              <li>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' required />
              </li>
            </ul>
          </fieldset>
          <button>Submit</button>
          <button type='button' onClick={() => changeView("logIn")}>
            Have an Account?
          </button>
        </form>
      )}

      {currentView === "logIn" && (
        <form>
          <h2>Welcome Back!</h2>
          <fieldset>
            <legend>Log In</legend>
            <ul>
              <li>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' required />
              </li>
              <li>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' required />
              </li>
              <li>
                <i />
                <a onClick={() => changeView("PWReset")} href='/'>
                  Forgot Password?
                </a>
              </li>
            </ul>
          </fieldset>
          <button>Login</button>
          <button type='button' onClick={() => changeView("signUp")}>
            Create an Account
          </button>
        </form>
      )}

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

export default Signup;
