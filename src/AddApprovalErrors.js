import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

// https://cssinjs.org/react-jss/#basic
const useStyles = createUseStyles({
  root: {
    background: "#fff",
    fontSize: "12px"
  },
  heading: {
    fontSize: "inherit",
    fontWeight: "bold",
    padding: "1em",
    margin: 0,
    borderTop: "1px solid #333",
    borderBottom: "1px solid #333"
  },
  log: {
    fontFamily: '"Courier New"',
    color: "red",
    padding: "0 1em",
    lineHeight: "1.5"
  }
});

const AddApprovalErrors = ({ errors = [] }) => {
  const classes = useStyles();
  if (!errors.length) {
    return null;
  }

  return (
    <article className={classes.root}>
      <h1 className={classes.heading}>Errors</h1>
      <pre className={classes.log}>{errors.join("\n")}</pre>
    </article>
  );
};

AddApprovalErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string)
};

export default AddApprovalErrors;
