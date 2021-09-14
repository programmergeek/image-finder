import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  TwitterAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYCfRvAiV1EoMDeNtjX-BFyQRxbGyUVoo",
  authDomain: "image-finder-a72d0.firebaseapp.com",
  projectId: "image-finder-a72d0",
  storageBucket: "image-finder-a72d0.appspot.com",
  messagingSenderId: "791569699170",
  appId: "1:791569699170:web:cd195d773bb6d38f6d1c3b",
  measurementId: "G-BT84WDZY2C",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export const googleAuth = (): void => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

export const twitterAuth = (): void => {
  const provider = new TwitterAuthProvider();
  signInWithRedirect(auth, provider);
};

export const signUpWithEmail = (
  data: Record<string, string>,
  setUID: (value: string) => void,
  setError: (value: Record<string, unknown>) => void
): void => {
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCred) => {
      setUID(userCred.user.uid);
    })
    .catch((e) => {
      setError({ hasError: true, errorCode: e.code, errorMessage: e.message });
    });
};
