/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import "./App.css";
import { SearchBar } from "./Components/searchBar/searchBar";

interface SearchContextInterface {
  lookFor: string;
  updateContext(input: string): void;
}

export const SearchContext = React.createContext<
  SearchContextInterface | undefined
>(undefined);

function App() {
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
        <SearchBar />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
