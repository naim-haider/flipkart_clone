import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCPstFwQDp5k8Ur3yZWTF1UulZjIQlIZvc",
  authDomain: "flipkartclone-38541.firebaseapp.com",
  projectId: "flipkartclone-38541",
  storageBucket: "flipkartclone-38541.appspot.com",
  messagingSenderId: "838815232630",
  appId: "1:838815232630:web:18ddd9435cc67b0e212557",
};

// creating hook to access state of this file ..
export const useFirebase = () => useContext(FirebaseContext);

//creating instense of our firebase ..
const firebaseApp = initializeApp(firebaseConfig);

// creating authentication ..
const firebaseAuth = getAuth(firebaseApp);

// creating googleAuthProvider instense
const googleProvider = new GoogleAuthProvider();

// Provider
export const FirebaseProvider = (props) => {
  // signup user with email and password ...
  const signupUserWithEmailAndPass = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  // signin user with email and password ...
  const signinUserWithEmailAndPass = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  // signin user with google usign popup ...
  const signInWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  // this is for navigating user to the home page if he is loggedin ...
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signinUserWithEmailAndPass,
        signupUserWithEmailAndPass,
        signInWithGoogle,
        isLoggedIn,
        user
      }}
    >
        {props.children}
    </FirebaseContext.Provider>
  );
};
