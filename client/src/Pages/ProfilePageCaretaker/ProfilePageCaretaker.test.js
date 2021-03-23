import React from "react";
import { shallow } from "enzyme";
import ProfilePageCaretaker from "./ProfilePageCaretaker";

describe("ProfilePageCaretaker", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProfilePageCaretaker />);
    expect(wrapper).toMatchSnapshot();
  });
});
