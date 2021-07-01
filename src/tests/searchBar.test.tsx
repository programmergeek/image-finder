import React from "react";
import { SearchBar } from "../Components/searchBar/searchBar";
import { mount } from "enzyme";

interface SearchContextInterface {
  lookFor: string;
  updateContext(input: string): void;
}

test("should render", () => {
  const component = mount(<SearchBar />);
  expect(component).toBeTruthy();
});
