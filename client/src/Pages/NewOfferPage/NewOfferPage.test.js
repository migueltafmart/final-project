import React from "react";
import { shallow } from "enzyme";
import NewOfferPage from "./NewOfferPage";

describe("NewOfferPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewOfferPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
