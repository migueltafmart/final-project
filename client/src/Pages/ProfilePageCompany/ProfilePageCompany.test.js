import React from "react";
import { shallow } from "enzyme";
import ProfilePageCompany from "./ProfilePageCompany";

describe("ProfilePageCompany", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProfilePageCompany />);
    expect(wrapper).toMatchSnapshot();
  });
});
