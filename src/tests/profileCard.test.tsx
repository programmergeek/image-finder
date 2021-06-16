import React from "react";
import ProfileCard from "../Components";
import { mount } from "enzyme";

test("Should return: 'Jimmy'", () => {
  const component = mount(<ProfileCard username="jimmydean" />);
  expect(component.state("firstName")).toBe("Jimmy");
});
