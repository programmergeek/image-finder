import React, { useContext, useState } from "react";
import { SearchContext } from "../../App";
import "./searchBar.css";

interface Props {
  input: string;
  updateInput(value: string): void;
}

export const SearchBarV2: React.FC<Props> = ({ input, updateInput }: Props) => {
  const search = useContext(SearchContext);
  const [state, setState] = useState(input);
  search?.updateContext(state);

  return (
    <div>
      <input
        className="search-bar primary-text"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setState(e.currentTarget.value);
          updateInput(e.currentTarget.value);
        }}
        value={state}
        placeholder="Search..."
      />
      <pre> Context: {JSON.stringify(search.lookFor)}</pre>
      <pre> Input: {JSON.stringify(input)}</pre>
    </div>
  );
};

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
      <pre>{JSON.stringify(search.lookFor)}</pre>
    </div>
  );
};
