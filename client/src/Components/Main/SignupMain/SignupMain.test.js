import React from "react";
import { shallow } from "enzyme";
import SignupMain from "./SignupMain";

describe("SignupMain", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SignupMain />);
    expect(wrapper).toMatchSnapshot();
  });
});
