import React from "react";
import { createUseStyles } from "react-jss";

// https://cssinjs.org/react-jss/#basic
const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    flex: "1"
  },
  textarea: {
    resize: "none",
    display: "block",
    flex: 1
  },
  buttonBar: {
    textAlign: "center",
    padding: "1em"
  },
  button: {
    background: "#fff",
    border: "1px solid #333",
    borderRadius: "4px",
    cursor: "pointer",
    padding: ".5em 1em",
    "&:hover": {
      boxShadow: "0 0 3px 1px rgba(0,0,0,0.2)"
    },
    "&:active": {
      boxShadow: "inset 0 0 3px 1px rgba(0,0,0,0.3)"
    }
  }
});

const AddApproval = ({approvals, setApprovals, errors, setErrors}) => {
  const classes = useStyles();
  const addApp = () => {
    const newApproval = {
      status: "rejected",
      approvers: [
        {
          status: "approvedj",
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
    }
    const statusAccepted = (approver) =>{
      debugger
      return approver.status === "approved" || approver.status === "rejected" || approver.status === "pending"
    }
    const approved = (approver) =>{
      return approver.status === "approved"
    }
    const allStatusAccepted = newApproval.approvers.every(statusAccepted)

    if(allStatusAccepted){
      let approval;
      let rejected = false;
      for(var i = 0; i < newApproval.approvers.length; i++) {
          if (newApproval.approvers[i].status === "rejected") {
              rejected = true;
              break;
          }
      }
      if (rejected){
        approval = "rejected"
      } else if (newApproval.approvers.every(approved)){
        approval = "approved"
      }else{
        approval = "pending"
      }
      newApproval.status = approval;
      setApprovals([...approvals, newApproval])
    }else{
      setErrors([...errors, "wrong type"])
      console.log(errors)
    }

  }
  return (
    <div className={classes.root}>
      <textarea className={classes.textarea} />
      <div className={classes.buttonBar}>
        <button className={classes.button} onClick={() => addApp()}>Add Approval</button>
      </div>
    </div>
  );
};

AddApproval.propTypes = {};

export default AddApproval;
