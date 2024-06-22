import axios from 'axios';
import React, { useState, useEffect } from "react";
import "../styles/login.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../components/firebase";
import { toast } from "react-toastify";
import Footer from "../components/Footer";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isAdmin, setIsAdmin] = useState(false); // State for admin status

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        if (!user.emailVerified) {
          auth.signOut();
          toast.error("Please verify your email before logging in.");
        } else {
          setLoggedIn(true);
          await fetchUserData(user);
        }
      } else {
        setLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await sendVerificationEmail(user);
      setIsSignUpSuccess(true);

      // Send a POST request to the Netlify Function 
      const { uid } = user;
      try {
        await axios.post('https://projectschool.dev/.netlify/functions/create-user', {
          firebaseUid: uid,
          email,
        });
        console.log('User created in database');
        toast.success("User signed up successfully! Please verify your email.");

        // Delay fetch user data to allow the backend to create the user
        setTimeout(() => fetchUserData(user), 3000); // Initial delay before the first fetch

      } catch (error) {
        console.error('Error creating user in database:', error);
      }
    } catch (error) {
      const errorMessage = error.message;
      console.error(errorMessage);
      toast.error("Email already in use. Please log in or choose another.");
    }
  };

  const sendVerificationEmail = async (user) => {
    try {
      await sendEmailVerification(user);
      console.log("Verification email sent");
    } catch (error) {
      console.error("Error sending verification email:", error);
    }
  };

  const fetchUserData = async (user, retries = 5, delay = 3000) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/${user.uid}/subscription-status`);
      if (!response.ok) {
        if (response.status === 404 && retries > 0) {
          console.warn('User not found, retrying...');
          // Retry fetching after a delay
          setTimeout(() => fetchUserData(user, retries - 1, delay * 2), delay); // Exponential backoff
          return;
        }
        throw new Error(`Error: ${response.statusText}`);
      }
      const userData = await response.json();
      setIsAdmin(userData.isAdmin); // Set the isAdmin state
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  if (loggedIn) {
    return (
      <div>
        <Navbar />
        <div className='login-container'>
          <section id='entry-page'>
            <h2>You are already logged in!</h2>
            <Link to='/'>
              <button className='login-button' type='button'>
                Go to Home
              </button>
            </Link>
          </section>
        </div>
        <Footer />
      </div>
    );
  }

  if (isSignUpSuccess) {
    return (
      <div>
        <Navbar />
        <div className='login-container'>
          <section id='entry-page'>
            <h2>Sign Up Successful!</h2>
            <p>
              Please check your email for the verification link before logging
              in.
            </p>
            <Link to='/login'>
              <button className='login-button' type='button'>
                Login
              </button>
            </Link>
          </section>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className='login-container'>
        <section id='entry-page'>
          <form onSubmit={onSubmit}>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label htmlFor='email'>Email:</label>
                  <input
                    type='email'
                    label='Email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='Email address'
                  />
                </li>
                <li>
                  <label htmlFor='password'>Password:</label>
                  <input
                    type='password'
                    label='Create password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder='Password'
                  />
                </li>
              </ul>
            </fieldset>
            <button type='submit'>Sign up</button>
            <Link to='/login'>
              <button className='login-button' type='button'>
                Have an Account?
              </button>
            </Link>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
