import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  PrimaryButton,
  TertiaryButton,
  IconButton,
} from "./../../Components";
import facebook from "./../../assets/Images/facebook.png";
import google from "./../../assets/Images/google.png";
import twitter from "./../../assets/Images/twitter.png";
import desktopArt from "./../../assets/Images/authPageArt-Desktop.svg";
import mobileArt from "./../../assets/Images/authPageArt-mobile.svg";
import "./styles.css";

interface Fields {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Fields>();

  return (
    <div className="form-container">
      <div className="page-art">
        <img className="desktop" src={desktopArt} alt="page Art" />
        <img className="mobile" src={mobileArt} alt="page Art" />
      </div>
      <div className="form">
        <p className="auth-header">Sign Up</p>
        <form>
          <div id="name">
            <div className="field sub-field gap">
              <label>First Name</label>
              <TextField
                className="input-field"
                {...register("firstName", { required: true })}
              />
            </div>
            <div className="field sub-field">
              <label>Last Name</label>
              <TextField
                className="input-field"
                {...register("lastName", { required: true })}
              />
            </div>
          </div>
          <div className="field">
            <label>Username</label>
            <TextField
              className="input-field"
              {...register("username", { required: true })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <TextField
              className="input-field"
              {...register("email", { required: true })}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <TextField
              className="input-field"
              {...register("password", { required: true })}
              type="password"
            />
          </div>
          <PrimaryButton type="submit" className="primary-form-btn">
            Sign Up
          </PrimaryButton>
        </form>
        <TertiaryButton>Login</TertiaryButton>
        <p className="muted">Sign up with</p>
        <div className="social-media-auth">
          <IconButton className="media">
            <img src={google} alt="google" className="media-icon" />
          </IconButton>
          <IconButton className="media">
            <img src={facebook} alt="facebook" className="media-icon" />
          </IconButton>
          <IconButton className="media">
            <img src={twitter} alt="twitter" className="media-icon" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
