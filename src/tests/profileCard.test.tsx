import React from "react";
import ProfileCard from "../Components/profileCard/ProfileCard";
import { mount, shallow } from "enzyme";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

/**  Test to make sure that the component is rendered */
test("Should be true", () => {
  const component = shallow(<ProfileCard username="jimmydean" />);
  expect(component).toBeTruthy();
});

/**
 * @description
 * Test to make sure data is received from the API
 */
describe("State update", () => {
  const mockData = {
    data: {
      name: "Jimmy Dean",
      followers_count: 143,
      total_photos: 76,
      total_likes: 0,
      twitter_username: "",
      instagram_username: "jimmydean",
      portfolio_url: "https://www.jimydean.com",
      profile_image: {
        large:
          "https://images.unsplash.com/profile-1600897570640-2237a383bacdimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128",
      },
      bio: "Today’s Your Day to Shine On",
    },
  };

  it("should update state values", (done) => {
    const mock = new MockAdapter(axios);
    mock
      .onGet(
        "https://api.unsplash.com//users/jimmydean/?client_id=CwzsxgVaUemIgH7gJ2ARE5QES6QqYuKAeBRTkMtQWC0"
      )
      .reply(200, mockData.data);
    const component = mount(<ProfileCard username="jimmydean" />);
    setImmediate(() => {
      component.update();
      console.log(component.debug());
      done();
    });
  });
});

/**
 * Test to see if links open on a new page
 */
test("Should return: _blank", () => {
  const component = shallow(<ProfileCard username="jimmdean" />);
  expect(
    component
      .find("a")
      .contains(
        <a href="" className="link" target="_blank" rel="noreferrer"></a>
      )
  ).toBeTruthy();
});
