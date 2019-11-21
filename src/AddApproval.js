import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import moment from "moment";
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
  form:{
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    flex: "1"
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
  var [value, setValue] = useState("");
  var handleTextAreaChange = (event) => {
    setValue(value = event.target.value)
  }

  const addApp = (event) => {
    event.preventDefault();
    let newApproval = {
      approvers:[]
    };
    // *** format submitted approval to create newApproval object. trim the white space. split status, requestedOn, and respondedOn. remove extra spaces, if any, between items
    let submittedApproval = value.split("\n");
    submittedApproval = submittedApproval.map(item => item.trim());
    submittedApproval = submittedApproval.map(item => {
      let splitStr = item.split(" ");
      splitStr = splitStr.filter(Boolean)
      let obj = {
        status: splitStr[1],
        requestedOn: splitStr[0],
        respondedOn: splitStr[2]
      }
      newApproval.approvers.push(obj)
      debugger

    })
    debugger
    // const newApproval = {
    //   status: "rejected",
    //   approvers: [
    //     {
    //       status: "approvedm",
    //       requestedOn: "2019-11-01T12:30:00Za",
    //       respondedOn: "2019-11-02T09:01:00Z"
    //     },
    //     {
    //       status: "rejected",
    //       requestedOn: "2019-11-01T12:30:00Z",
    //       respondedOn: "2019-11-02T16:35:00Z"
    //     },
    //     {
    //       status: "pending",
    //       requestedOn: "2019-11-01T12:30:00Z"
    //     }
    //   ]
    // }

    // *** check if all statuses from each approver is either approved, rejected, or pending
    const statusAccepted = (approver) =>{
      return approver.status === "approved" || approver.status === "rejected" || approver.status === "pending"
    }
    const allStatusValid = newApproval.approvers.every(statusAccepted)


    // *** check if all dates submitted are valid
    const isValidDates =  (date) =>{
      return moment(date, "YYYY-MM-DDTHH:mm:ssZ", true).isValid()
    }
    //make an arrays for requested and responded so can use every to check if dates are valid
    const requestedOnArr = newApproval.approvers.map(approver => approver.requestedOn)
    // first filter through the approvers to see if they responded, this does not have to be added when creating approval
    const respondedOnFilter = (approver) => {
      return approver.respondedOn
    }
    const respondedOnArr = newApproval.approvers.filter(respondedOnFilter).map(approver => approver.respondedOn)
    const allRequestedValid = requestedOnArr.every(isValidDates)
    const allRespondedValid = respondedOnArr.every(isValidDates)


    // *** if all status and dates are valid then check to see what overall status is
    if(allStatusValid && allRequestedValid && allRespondedValid){
      let approval;
      let rejected = false;
      for(var i = 0; i < newApproval.approvers.length; i++) {
          if (newApproval.approvers[i].status === "rejected") {
              rejected = true;
              break;
          }
      }
      const approved = (approver) =>{
        return approver.status === "approved"
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
      let errArr = [];
      if(!allStatusValid){
        errArr.push("Wrong status type. Please make sure you use 'approved', 'rejected', or 'pending'");
      }
      if(!allRequestedValid){
        errArr.push("Requested on date format is incorrect. Please make sure all dates are submitted like YYYY-MM-DDTHH:mm:ssZ")
      }
      if(!allRespondedValid){
        errArr.push("Responded on date format is incorrect. Please make sure all dates are submitted like YYYY-MM-DDTHH:mm:ssZ")
      }

      setErrors([...errors, errArr[0], errArr[1], errArr[2]])

    }

  }
  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={addApp}>
        <textarea className={classes.textarea} value={value} onChange={handleTextAreaChange}/>
        <div className={classes.buttonBar}>
          <button className={classes.button} type="submit">Add Approval</button>
        </div>
      </form>
    </div>
  );
};

AddApproval.propTypes = {};

export default AddApproval;
