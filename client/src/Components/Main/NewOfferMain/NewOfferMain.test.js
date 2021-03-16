import React from "react";
import { shallow } from "enzyme";
import NewOfferMain from "./NewOfferMain";

describe("NewOfferMain", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewOfferMain />);
    expect(wrapper).toMatchSnapshot();
  });
});
