import React, { useContext, useState } from "react";
import { SearchContext } from "../../App";
import "./searchBar.css";

export const SearchBar: React.FC = () => {
  const search = useContext(SearchContext);
  const [state, setState] = useState("");
  search?.updateContext(state);

  return (
    <div>
      <input
        className="search-bar primary-text"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setState(e.currentTarget.value);
        }}
        value={state}
        placeholder="Search..."
      />
    </div>
  );
};
