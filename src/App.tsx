import React from "react";
import "./App.css";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Components";

const App: React.FC = () => {
  return (
    <div>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton> Secondary Button </SecondaryButton>
      <TertiaryButton> Tertiary Button </TertiaryButton>
    </div>
  );
};

export default App;
