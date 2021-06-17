import React from "react";
import ProfileCard from "../Components/profileCard/ProfileCard";
import { mount, shallow } from "enzyme";

/**  Test to make sure that the component is rendered */
test("Should be true", () => {
  const component = shallow(<ProfileCard username="jimmydean" />);
  expect(component).toBeTruthy();
});

/**
 * @description
 * Test to make sure data is received from the API
 */
test("Should return: 'Jimmy Dean'", () => {
  const component = mount(<ProfileCard username="jimmydean" />);
  expect(component.find(".name").children()).toBe("Jimmy Dean");
});

/**
 * Test to see if links open on a new page
 */
test("Should return: _blank", () => {
  const component = shallow(<ProfileCard username="jimmdean" />);
  expect(component.find("a").props()).toHaveAttribute("target", "_blank");
});
