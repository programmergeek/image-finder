/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from "react";
import { getData } from "../";

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
        <img src={state.profile_image.large} alt="profile-pic" />
        <p className="name"> {state.name} </p>
        <div className="stats">
          <p className="stat"> {state.followers_count} followers </p>
          <p className="stat"> {state.total_likes} likes </p>
          <p className="stat"> {state.total_photos} photos </p>
        </div>
        <div className="links">
          <a
            href={`https://www.twitter.com/${state.twitter_username}`}
            className="link"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            href={`https://www.instagram.com/${state.instagram_username}`}
            className="link"
            target="_blank"
            rel="noreferrer"
          ></a>
          <a
            href={state.portfolio_url}
            className="link"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
      </div>
      <div className="bio"></div>
    </div>
  );
};

export default ProfileCard;
