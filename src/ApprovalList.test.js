import React from "react";
import { shallow } from "enzyme";
import ApprovalList from "./ApprovalList";

it("renders without crashing", () => {
  shallow(<ApprovalList approvals={[]} selectedIndex={0} />);
});
