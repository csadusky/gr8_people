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

const AddApproval = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <textarea className={classes.textarea} />
      <div className={classes.buttonBar}>
        <button className={classes.button}>Add Approval</button>
      </div>
    </div>
  );
};

AddApproval.propTypes = {};

export default AddApproval;
