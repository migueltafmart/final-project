import React from "react";
import { shallow } from "enzyme";
import SignupCompanyMain from "./SignupCompanyMain";

describe("SignupCompanyMain", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SignupCompanyMain />);
    expect(wrapper).toMatchSnapshot();
  });
});
