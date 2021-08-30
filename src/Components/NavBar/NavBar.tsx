import React from "react";
import { IconButton, SearchBar, TertiaryButton } from "..";
import "./styles.css";
import search from "./../../assets/Images/search.png";

export const NavBar: React.FC = () => {
  return (
    <div id="nav-bar">
      <div id="page-button">
        <TertiaryButton>Home</TertiaryButton>
        <TertiaryButton>About</TertiaryButton>
        <TertiaryButton>Discover</TertiaryButton>
      </div>
      <div id="search-bar">
        <SearchBar id="nav-search" placeholder="Search..." />
        <IconButton id="search-button">
          {" "}
          <img src={search} alt="" height="20px" width="20px" />{" "}
        </IconButton>
      </div>
    </div>
  );
};
