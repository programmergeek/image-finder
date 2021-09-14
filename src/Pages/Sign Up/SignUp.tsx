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
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-3 px-5 py-2 form-container">
          <p className="h1 header text-center">Sign Up</p>
          <form onSubmit={handleSubmit(emailSignUp)}>
            <div className="mb-2">
              <label className="form-label">First Name</label>
              <TextField
                type="text"
                className="form-control"
                {...register("firstName", { required: true })}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Last Name</label>
              <TextField
                type="text"
                className="form-control"
                {...register("lastName", { required: true })}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Username</label>
              <TextField
                className="form-control"
                {...register("username", { required: true })}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Email</label>
              <TextField
                className="form-control"
                {...register("email", { required: true })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <TextField
                className="form-control"
                {...register("password", { required: true })}
                type="password"
              />
            </div>
            <PrimaryButton
              type="submit"
              className="form-btn mx-auto"
              style={{ width: "100%" }}
            >
              Sign Up
            </PrimaryButton>
          </form>
          <TertiaryButton className="form-btn" style={{ width: "100%" }}>
            Login
          </TertiaryButton>
          <p className="text-muted text-center">Sign up with</p>
          <div className="d-flex justify-content-center">
            <div className="btn-group" role="group">
              <div className="me-4">
                <IconButton className="media" onClick={() => googleAuth()}>
                  <img src={google} alt="google" className="media-icon" />
                </IconButton>
              </div>
              <div className="">
                <IconButton className="media" onClick={() => twitterAuth()}>
                  <img src={twitter} alt="twitter" className="media-icon" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
