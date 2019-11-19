import React from "react";
import { shallow } from "enzyme";
import AddApproval from "./AddApproval";

it("renders without crashing", () => {
  shallow(<AddApproval />);
});

it("contains a textarea", () => {
  const cmp = shallow(<AddApproval />);
  expect(cmp.exists("textarea")).toBe(true);
});

it("contains a button", () => {
  const cmp = shallow(<AddApproval />);
  expect(cmp.exists("button")).toBe(true);
});
