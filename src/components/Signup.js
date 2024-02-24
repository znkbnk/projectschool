import React, { useState } from "react";
import "../styles/login.css";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import Footer from "./Footer";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        toast.success("User signed up successfully!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorMessage);
      });
  };

  return (
    <div>
      <Navbar />

      <div className='login-container'>
        <section id='entry-page'>
          <form>
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
            <button type='submit' onClick={onSubmit}>
              Sign up
            </button>
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
