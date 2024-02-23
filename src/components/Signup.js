import React from "react";
import "../styles/login.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const Signup = () => {
 

  return (
    <div className='login-container'>
      <Navbar />
      <section id='entry-page'>
        <form>
          <h2>Sign Up!</h2>
          <fieldset>
            <legend>Create Account</legend>
            <ul>
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
          <Link to='/login'>
            <button className="login-button" type='button'>Have an Account?</button>
          </Link>
        </form>
      </section>
    </div>
  );
};

export default Signup;
