import React from "react";
import { shallow } from "enzyme";
import OfferCard from "./OfferCard";

describe("OfferCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<OfferCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
