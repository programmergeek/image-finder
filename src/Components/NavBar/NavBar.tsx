import React, { useState } from "react";
import { IconButton, SearchBar, TertiaryButton } from "..";
import "./styles.css";
import search from "./../../assets/Images/search.png";

interface Props {
  onChange?: (value: string) => void;
}

export const NavBar: React.FC<Props> = ({ ...props }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (input: string) => {
    setSearchTerm(input);
    if (props.onChange) props.onChange(searchTerm);
  };

  return (
    <div id="nav-bar">
      <div id="page-button">
        <TertiaryButton>Home</TertiaryButton>
        <TertiaryButton>About</TertiaryButton>
        <TertiaryButton>Discover</TertiaryButton>
      </div>
      <div id="search-bar">
        <SearchBar
          id="nav-search"
          placeholder="Search..."
          onChange={(input) => handleChange(input.target.value)}
        />
        <IconButton id="search-button">
          {" "}
          <img src={search} alt="" height="20px" width="20px" />{" "}
        </IconButton>
      </div>
    </div>
  );
};
