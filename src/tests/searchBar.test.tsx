import React from "react";
import { SearchBar } from "../Components";
import { mount } from "enzyme";

describe("SearchBar component", () => {
  it("should render", () => {
    const component = mount(<SearchBar />);
    expect(component).toBeTruthy();
  });

  it("should update context", () => {
    let searchTerm = "";
    const mockContext = {
      lookFor: searchTerm,
    };
    const component = mount(<SearchBar />, { context: mockContext });
    const updateSearchTerm = jest.fn(() => {
      searchTerm = "people";
    });
    updateSearchTerm();
    expect(component.context("lookFor")).toBe("people");
  });
});
