import React from "react";
import { shallow } from "enzyme";
import ApprovalView from "./ApprovalView";

it("renders without crashing", () => {
  shallow(<ApprovalView />);
});
