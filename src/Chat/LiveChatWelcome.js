import React from "react";
import GoogleSignin from "../images/btn_google_signin_dark_pressed_web.png";
import { auth } from "../components/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const LiveChatWelcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className='welcome'>
      <h1>Welcome to Live Chat.</h1>
      <h1>Sign in with Google to chat.</h1>
      <button className='sign-in'>
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt='sign in with google'
          type='button'
        />
      </button>
    </main>
  );
};

export default LiveChatWelcome;
