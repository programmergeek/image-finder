import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IconButton, SearchBar, TertiaryButton } from "..";
import "./styles.css";
import search from "./../../assets/Images/search.png";

interface Props {
  onChange?: (value: string) => void;
}

interface Fields {
  input: string;
}

export const NavBar: React.FC<Props> = ({ ...props }: Props) => {
  const [, setSearchTerm] = useState("");
  const { register, handleSubmit, watch } = useForm<Fields>();

  const handleChange: SubmitHandler<Fields> = (data) => {
    setSearchTerm(watch("input"));
    if (props.onChange) props.onChange(data.input);
  };

  useEffect(() => {
    setSearchTerm(watch("input"));
    if (props.onChange) props.onChange(watch("input"));
  });

  return (
    <div id="nav-bar" style={{ background: "white" }}>
      <div id="page-button">
        <TertiaryButton>Home</TertiaryButton>
        <TertiaryButton>About</TertiaryButton>
        <TertiaryButton>Discover</TertiaryButton>
      </div>
      <div id="search-bar">
        <form onSubmit={handleSubmit(handleChange)}>
          <SearchBar
            id="nav-search"
            placeholder="Search..."
            {...register("input")}
          />
          <IconButton id="search-button" type="submit">
            {" "}
            <img src={search} alt="" height="20px" width="20px" />{" "}
          </IconButton>
        </form>
      </div>
    </div>
  );
};
