import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

// https://cssinjs.org/react-jss/#basic
const useStyles = createUseStyles({
  root: {
    listStyle: "none",
    padding: "0",
    margin: "0"
  },
  item: {
    display: "flex",
    alignItems: "flex-start",
    padding: "1em",
    borderBottom: "1px solid #000",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f5f5f5"
    },
    "&:last-child": {
      borderBottom: "none"
    }
  },
  item__active: {
    backgroundColor: "hsla(218, 100%, 95%, 1)",
    "&:hover": {
      backgroundColor: "hsla(218, 100%, 95%, 1)"
    }
  },
  title: {
    flex: 1,
    margin: "0"
  },
  badge: {
    borderRadius: "4px",
    backgroundColor: "#ccc",
    color: "#333",
    display: "inline-block",
    fontSize: "10px",
    textTransform: "uppercase",
    padding: "5px 4px",
    fontWeight: "bold"
  },
  badge__approved: {
    backgroundColor: "hsla(115, 29%, 71%, 1)"
  },
  badge__rejected: {
    backgroundColor: "hsla(0, 100%, 50%, 0.48)"
  }
});

const ApprovalList = ({ approvals, selectedIndex) => {
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      {approvals.map((approval, index) => {
        const itemClassName = clsx(classes.item, {
          [classes.item__active]: selectedIndex === index
        });

        const badgeClassName = clsx(classes.badge, {
          [classes.badge__approved]: approval.status === "approved",
          [classes.badge__rejected]: approval.status === "rejected"
        });
        return (
          <li key={index} className={itemClassName}>
            <p className={classes.title}>Approval {index + 1}</p>
            <span className={badgeClassName}>{approval.status}</span>
          </li>
        );
      })}
    </ul>
  );
};

ApprovalList.propTypes = {
  approvals: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired
    })
  ).isRequired,
  selectedIndex: PropTypes.number.isRequired
};

export default ApprovalList;
