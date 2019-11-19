import React from "react";
import App from "./App";
import AddApproval from "./AddApproval";
import AddApprovalErrors from "./AddApprovalErrors";
import ApprovalList from "./ApprovalList";
import ApprovalView from "./ApprovalView";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<App />);
});

it("contains an AddApproval element", () => {
  const app = shallow(<App />);
  expect(app.exists(AddApproval)).toBe(true);
});

it("contains an AddApprovalErrors element", () => {
  const app = shallow(<App />);
  expect(app.exists(AddApprovalErrors)).toBe(true);
});

it("contains an ApprovalList element", () => {
  const app = shallow(<App />);
  expect(app.exists(ApprovalList)).toBe(true);
});

it("contains an ApprovalView element", () => {
  const app = shallow(<App />);
  expect(app.exists(ApprovalView)).toBe(true);
});
