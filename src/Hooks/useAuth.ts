import { useState, useEffect } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
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

const emailAuth = (
  type: "signUp" | "login",
  email: string,
  password: string,
  firebaseApp: FirebaseApp,
  setUID: (val: string) => void,
  setError: (value: Record<string, unknown>) => void
) => {
  const auth = getAuth(firebaseApp);
  switch (type) {
    case "signUp":
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
          setUID(userCred.user.uid);
        })
        .catch((error) => {
          const errorCode: string = error.code;
          const errorMessage: string = error.message;
          setError({
            errorCode,
            errorMessage,
          });
        });
      break;
    case "login":
      signInWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
          setUID(userCred.user.uid);
        })
        .catch((error) => {
          const errorCode: string = error.code;
          const errorMessage: string = error.message;
          setError({
            errorCode,
            errorMessage,
          });
        });
  }
};

const googleAuth = (
  firebaseApp: FirebaseApp,
  setUID: (value: string) => void,
  setError: (error: Record<string, unknown>) => void
) => {
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((res) => {
      if (res) setUID(res.user.uid);
    })
    .catch((error) => {
      const errorCode: string = error.code;
      const errorMessage: string = error.message;
      setError({
        errorCode,
        errorMessage,
      });
    });
};

export const useAuth = (props: Props) => {
  const app = initializeApp(firebaseConfig);
  return;
};
