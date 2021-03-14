import React from "react";
import { shallow } from "enzyme";
import HomeMain from "./HomeMain";

describe("HomeMain", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HomeMain />);
    expect(wrapper).toMatchSnapshot();
  });
});
