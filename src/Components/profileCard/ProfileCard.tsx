import React, { useState, useEffect } from "react";

const ProfileCard = ({ username, ...props }: { username: string }) => {
  const [profileInfo, setProfileInfo] = useState({
    firstName: "",
    lastName: "",
    followers: 0,
    photos: 0,
    likes: 0,
    instagram: "",
    twitter: "",
    portfolio: "",
    pic: "",
    bio: "",
  });
};
