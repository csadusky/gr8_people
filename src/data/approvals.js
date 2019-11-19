export const approvals = [
  {
    status: "approved",
    approvers: [
      {
        status: "approved",
        requestedOn: "2019-11-01T12:30:00Z",
        respondedOn: "2019-11-02T09:01:00Z"
      },
      {
        status: "approved",
        requestedOn: "2019-11-01T12:30:00Z",
        respondedOn: "2019-11-02T16:35:00Z"
      },
      {
        status: "approved",
        requestedOn: "2019-11-02T16:35:00Z",
        respondedOn: "2019-11-03T10:09:00Z"
      }
    ]
  },
  {
    status: "rejected",
    approvers: [
      {
        status: "approved",
        requestedOn: "2019-11-01T12:30:00Z",
        respondedOn: "2019-11-02T09:01:00Z"
      },
      {
        status: "rejected",
        requestedOn: "2019-11-01T12:30:00Z",
        respondedOn: "2019-11-02T16:35:00Z"
      },
      {
        status: "pending",
        requestedOn: "2019-11-01T12:30:00Z"
      }
    ]
  },
  {
    status: "pending",
    approvers: [
      {
        status: "approved",
        requestedOn: "2019-11-01T12:30:00Z",
        respondedOn: "2019-11-02T09:01:00Z"
      },
      {
        status: "pending",
        requestedOn: "2019-11-01T12:30:00Z"
      }
    ]
  }
];
