import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { googleAuth, twitterAuth, signUpWithEmail } from "../../Functions";
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

export const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm<Fields>();
  const [, setUID] = useState("");
  //const [error, setError] = useState<Record<string, string>>({});

  const emailSignUp: SubmitHandler<Fields> = (data) => {
    const emailAndPassword = {
      email: data.email,
      password: data.password,
    };
    signUpWithEmail(emailAndPassword, setUID);
  };

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
