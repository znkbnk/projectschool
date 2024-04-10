import React, { useState } from "react";
import "../styles/login.css";
import Navbar from "../components/Navbar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (!user.emailVerified) {
          auth.signOut();
          toast.error("Please verify your email before logging in.");
          return;
        }
        navigate("/");
        toast.success("Logged in successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          toast.error("Incorrect email/password. Please try again.");
        } else if (errorCode === "auth/user-not-found") {
          toast.error("User not found. Please check your email.");
        } else {
          toast.error("Error: " + errorMessage);
          console.error(errorCode, errorMessage);
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className='login-container'>
        <section id='entry-page'>
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label htmlFor='email'>Email:</label>
                  <input
                    id='email-address'
                    name='email'
                    type='email'
                    required
                    placeholder='Email address'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor='password'>Password:</label>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    required
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </li>
              </ul>
            </fieldset>
            <div className='forgot-password'>
              <Link to='/resetPassword'>Forgot Password?</Link>
            </div>
            <button onClick={onLogin}>Login</button>
            <Link to='/signup'>
              <button className='login-button' type='button'>
                Create an Account
              </button>
            </Link>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
