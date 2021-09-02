import React from "react";
import "./styles.css";

interface Props {
  src: string;
  alt: string;
  username: string;
  profileImage: string;
  key: string;
}

export const ImageCard: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <div className="image-card-container" key={props.key}>
      <div className="image">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="photo-info">
        <img src={props.profileImage} alt="profile-photo" />
        <p className="username"> {props.username} </p>
      </div>
    </div>
  );
};
