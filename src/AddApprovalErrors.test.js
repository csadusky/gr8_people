import React from "react";
import AddApprovalErrors from "./AddApprovalErrors";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<AddApprovalErrors errors={[]} />);
});

it("renders the errors as individual lines", () => {
  const cmp = shallow(
    <AddApprovalErrors errors={["line 1", "line 2", "line 3"]} />
  );

  const expectedLog = `line 1
line 2
line 3`;

  expect(cmp.text().indexOf(expectedLog)).toBeGreaterThan(-1);
});
