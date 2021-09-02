import React from "react";
import "styles.css";

interface Props {
  src: string;
  description: string;
  username: string;
  profileImage: string;
}

export const ImageCard: React.FC<Props & JSX.Element> = ({
  ...props
}: Props & JSX.Element) => {
  return (
    <div className="image-card-container">
      <div className="image">
        <img src={props.src} alt={props.description} />
      </div>
      <div className="photo-info">
        <img src={props.profileImage} alt="profile-photo" />
        <p className="username"> {props.username} </p>
      </div>
    </div>
  );
};
