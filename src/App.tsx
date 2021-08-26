import React from "react";
import "./App.css";
import {
  PrimaryButton,
  IconButton,
  SecondaryButton,
  TertiaryButton,
} from "./Components";
import Search from "./assets/Images/search.png";

const App: React.FC = () => {
  return (
    <div>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton> Secondary Button </SecondaryButton>
      <TertiaryButton> Tertiary Button </TertiaryButton>
      <IconButton>
        <img src={Search} alt="search" height="22" width="22" />
      </IconButton>
    </div>
  );
};

export default App;
