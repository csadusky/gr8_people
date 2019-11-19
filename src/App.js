import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { approvals as initialApprovals } from "./data/approvals";
import AddApproval from "./AddApproval";
import AddApprovalErrors from "./AddApprovalErrors";
import ApprovalList from "./ApprovalList";
import ApprovalView from "./ApprovalView";

// https://cssinjs.org/react-jss/#basic
const useStyles = createUseStyles({
  app: {
    display: "flex",
    height: "100vh",
    alignItems: "stretch"
  },
  leftRail: {
    flex: 1,
    backgroundColor: "#eee",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch"
  },
  addApprovalWrap: {
    flex: 1
  },
  approvalListWrap: {
    width: "200px",
    overflow: "auto",
    borderLeft: "2px solid #ddd",
    borderRight: "2px solid #ddd"
  },
  approvalViewWrap: {
    flex: 2,
    backgroundColor: "#f5f5f5",
    overflow: "auto"
  },
  "@global": {
    html: {
      margin: 0,
      padding: 0,
      fontFamily: "Verdana, Arial, sans-serif"
    },
    body: {
      margin: 0,
      padding: 0
    }
  }
});

function App() {
  const classes = useStyles();

  // https://reactjs.org/docs/hooks-state.html
  const [approvals, setApprovals] = useState(initialApprovals);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <main className={classes.app}>
      <section className={classes.leftRail}>
        <AddApproval />
        <AddApprovalErrors errors={[]} />
      </section>

      <section className={classes.approvalListWrap}>
        <ApprovalList approvals={approvals} selectedIndex={selectedIndex}/>
      </section>

      <section className={classes.approvalViewWrap}>
        <ApprovalView approvals={approvals} selectedIndex={selectedIndex}/>
      </section>
    </main>
  );
}

export default App;