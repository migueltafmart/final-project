import React from "react";
import { shallow } from "enzyme";
import MatchMain from "./MatchMain";

describe("MatchMain", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MatchMain />);
    expect(wrapper).toMatchSnapshot();
  });
});
