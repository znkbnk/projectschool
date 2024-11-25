import React from "react";
import GoogleSignin from "../images/btn_google_signin_dark_pressed_web.webp";
import { auth } from "../components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import '../styles/livechat.css'
import { toast } from "react-toastify";

const LiveChatNavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

   const signOut = () => {
     auth
       .signOut()
       .then(() => {
         toast.success("Signed out successfully");
       })
       .catch((error) => {
         toast.error("Error signing out");
         console.error(error);
       });
   };

  return (
    <nav className='nav-bar'>
      <h2>Live Chat</h2>
      {user ? (
        <button onClick={signOut} className='button-35' type='button'>
          Sign Out
        </button>
      ) : (
        <button className='sign-in'>
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt='sign in with google'
            type='button'
          />
        </button>
      )}
    </nav>
  );
};

export default LiveChatNavBar;
