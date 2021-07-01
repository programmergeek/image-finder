import React from "react";
import { SearchBar } from "../Components/searchBar/searchBar";
import { mount } from "enzyme";

test("should render", () => {
  const component = mount(<SearchBar />);
  expect(component).toBeTruthy();
});
