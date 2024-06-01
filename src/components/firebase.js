
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "projectschool-48842",
  storageBucket: "projectschool-48842.appspot.com",
  messagingSenderId: "157343883116",
  appId: "1:157343883116:web:69f852ad5113c3c8751d49",
  measurementId: "G-7L2NMEJKB6",
};

const app = initializeApp(firebaseConfig);


 const auth = getAuth(app);
 const db = getFirestore(app);

 export { auth, db}