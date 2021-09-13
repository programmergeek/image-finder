import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  TwitterAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import {
  TextField,
  PrimaryButton,
  TertiaryButton,
  IconButton,
} from "./../../Components";
import google from "./../../assets/Images/google.png";
import twitter from "./../../assets/Images/twitter.png";
import desktopArt from "./../../assets/Images/authPageArt-Desktop.svg";
import mobileArt from "./../../assets/Images/authPageArt-mobile.svg";

interface Fields {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
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

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>();
  const [uid, setUID] = useState("");
  const [error, setError] = useState<Record<string, string>>({});

  const googleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const twitterAuth = () => {
    const provider = new TwitterAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const emailSignUp: SubmitHandler<Fields> = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password).then(
      (userCred) => {
        setUID(userCred.user.uid);
        console.log(userCred.user.uid);
      }
    );
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          setUID(result.user.uid);
        }
      })
      .catch((error) => {
        setError({
          errorCode: error.code,
          errorMessage: error.message,
        });
      });
  }, [googleAuth, twitterAuth]);

  return (
    <div className="">
      <div className="">
        <img className="" src={desktopArt} alt="page Art" />
        <img className="" src={mobileArt} alt="page Art" />
      </div>
      <div className="">
        <p className="">Sign Up</p>
        <form onSubmit={handleSubmit(emailSignUp)}>
          <div id="">
            <div className="">
              <label>First Name</label>
              <TextField
                className=""
                {...register("firstName", { required: true })}
              />
            </div>
            <div className="field sub-field">
              <label>Last Name</label>
              <TextField
                className=""
                {...register("lastName", { required: true })}
              />
            </div>
          </div>
          <div className="">
            <label>Username</label>
            <TextField
              className=""
              {...register("username", { required: true })}
            />
          </div>
          <div className="">
            <label>Email</label>
            <TextField
              className=""
              {...register("email", { required: true })}
            />
          </div>
          <div className="">
            <label>Password</label>
            <TextField
              className=""
              {...register("password", { required: true })}
              type="password"
            />
          </div>
          <PrimaryButton type="submit" className="">
            Sign Up
          </PrimaryButton>
        </form>
        <TertiaryButton>Login</TertiaryButton>
        <p className="muted">Sign up with</p>
        <div className="social-media-auth">
          <IconButton className="media" onClick={() => googleAuth()}>
            <img src={google} alt="google" className="media-icon" />
          </IconButton>
          <IconButton className="media" onClick={() => twitterAuth()}>
            <img src={twitter} alt="twitter" className="media-icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
