/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from "react";
import { getData } from "../";
import "./ProfileCard.css";
import Globe from "../../assets/images/icons/globe.png";
import TwitterIcon from "../../assets/images/icons/twitter.png";
import InstagramIcon from "../../assets/images/icons/instagram.png";

interface Props {
  username: string;
}

const ProfileCard: React.FC<Props> = ({ username }: Props) => {
  const [state, setState] = useState({
    name: "",
    followers_count: 0,
    total_photos: 0,
    total_likes: 0,
    twitter_username: "",
    instagram_username: "",
    portfolio_url: "",
    profile_image: { large: "" },
    bio: "",
  });

  useEffect(() => {
    const data = getData(`/users/${username}`);
    data.then((res) => {
      setState(res.data);
    });
  });

  return (
    <div className="profile card">
      <div className="img-stats-links">
        <img
          src={state.profile_image.large}
          alt="profile-pic"
          className="user-img"
        />
        <div className="name-stats-links">
          <p className="name primary-text"> {state.name} </p>
          <div className="stats">
            <p className="stat secondary-text">
              {" "}
              {state.followers_count} followers{" "}
            </p>
            <p className="stat secondary-text"> {state.total_likes} likes </p>
            <p className="stat secondary-text"> {state.total_photos} photos </p>
          </div>
          <div className="links">
            <a
              href={`https://www.twitter.com/${state.twitter_username}`}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={TwitterIcon} alt="twitter" className="icon" />{" "}
            </a>
            <a
              href={`https://www.instagram.com/${state.instagram_username}`}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={InstagramIcon} alt="instagram" className="icon" />{" "}
            </a>
            <a
              href={state.portfolio_url}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={Globe} alt="website" className="icon" />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="bio">
        <p className="primary-text" id="bio-header">
          {" "}
          Bio:{" "}
        </p>
        <p className="secondary-text" id="bio">
          {" "}
          {state.bio}{" "}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
