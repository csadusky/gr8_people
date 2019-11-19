# Tasks

1. Implement `./src/ApprovalView.js` to match the design specified in the file `./approval-view.png`. The currently selected approval should be displayed by the application.
2. Currently, the selected approval does not change when the user clicks an approval in the list. Clicking an item in the list should update the selected state of the list and should update the approval view to display the clicked approval.
3. Complete the add approval operation. Users will enter a list of approvers into the textarea. Each line will represent a single approver and will be entered in the format:

   ```
   requestedOn status respondedOn
   ```

   For example, the second approval found in `./data/approvals.js` would be entered as:

   ```
   2019-11-01T12:30:00Z approved 2019-11-02T09:01:00Z
   2019-11-01T12:30:00Z rejected 2019-11-02T16:35:00Z
   2019-11-01T12:30:00Z pending
   ```

   1. `status` MUST be one of the three values: "pending", "approved", "rejected".
   2. `requestedOn` and `respondedOn` MUST be specified as ISO 8601 formatted timestamps
   3. If the approver has not responded (i.e., `status` is "pending"), the `respondedOn` field MUST be omitted.
   4. The overall status of the approval MUST be computed from the approver statuses. If any approver rejects, the status is "rejected". If all approvers approve, the status is "approved". If we're still waiting for approvals, the status is "pending".
   5. If any line entered by the user contains an error, syntax or otherwise, the application should not add the approval to the list. Instead, all of lines with errors should be displayed to the user by passing them to the `AddApprovalErrors` component rendered in `./src/App.js`.
