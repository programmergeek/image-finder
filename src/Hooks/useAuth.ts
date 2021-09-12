import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

interface Props {
  type: "signUp" | "login";
  email?: string;
  password?: string;
}

const firebaseConfig = {
  apiKey: "AIzaSyCYCfRvAiV1EoMDeNtjX-BFyQRxbGyUVoo",
  authDomain: "image-finder-a72d0.firebaseapp.com",
  projectId: "image-finder-a72d0",
  storageBucket: "image-finder-a72d0.appspot.com",
  messagingSenderId: "791569699170",
  appId: "1:791569699170:web:cd195d773bb6d38f6d1c3b",
  measurementId: "G-BT84WDZY2C",
};

export const useAuth = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const google = new GoogleAuthProvider();
  const facebook = new FacebookAuthProvider();
  const twitter = new TwitterAuthProvider();
  return;
};
