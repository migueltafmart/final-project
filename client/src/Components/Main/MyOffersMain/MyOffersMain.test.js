import React from "react";
import { shallow } from "enzyme";
import MyOffersMain from "./MyOffersMain";

describe("MyOffersMain", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MyOffersMain />);
    expect(wrapper).toMatchSnapshot();
  });
});
