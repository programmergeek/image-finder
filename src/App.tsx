/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from "react";
import "./App.css";
import { ImageGrid } from "./Components/imageGrid/ImageGrid";
import { SearchBarV2 } from "./Components/searchBar/searchBar";

interface SearchContextInterface {
  lookFor: string;
  updateContext(input: string): void;
}

export const SearchContext = React.createContext<SearchContextInterface>({
  lookFor: "",
  updateContext(input: string) {
    this.lookFor = input;
  },
});

function App() {
  const [testState, setTestState] = useState("");
  return (
    <SearchContext.Provider
      value={{
        lookFor: "",
        updateContext(input: string) {
          this.lookFor = input;
        },
      }}
    >
      <div className="App">
        <SearchBarV2 input={testState} updateInput={setTestState} />
        <ImageGrid searchValue={testState} />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
