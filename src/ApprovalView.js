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
  banner: {
    backgroundColor: "#ccc",
    color: "#333",
    padding: "2em",
    textTransform: "capitalize",
    fontWeight: "bold",
    filter: "drop-shadow(0 0 3px #333)"
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
  approved: {
    backgroundColor: "hsla(115, 29%, 71%, 1)"

  },
  icon:{
    "&:before": {
      content: '"⧖"'
    }
  },
  rejected: {
    backgroundColor: "hsla(0, 100%, 50%, 0.48)"
  },
  iconApproved:{
    "&:before": {
      content: '"✓"'
    }
  },
  iconRejected:{
    "&:before": {
      content: '"✗"'
    }
  }
});

const ApprovalView = ({ approvals, selectedIndex }) => {
  const classes = useStyles();
  const bannerClassName = clsx(classes.banner, {
    [classes.approved]: approvals[selectedIndex].status === "approved",
    [classes.rejected]: approvals[selectedIndex].status === "rejected"
  });
  return(
    <div className={classes.root}>
      <div className={bannerClassName}>{approvals[selectedIndex].status}</div>

        {approvals[selectedIndex].approvers.map((approver, index) => {
          const badgeClassName = clsx(classes.badge,{
            [classes.approved]: approver.status === "approved",
            [classes.rejected]: approver.status === "rejected"
          });
          const badgeIconName = clsx(classes.icon,{
            [classes.iconApproved]: approver.status === "approved",
            [classes.iconRejected]: approver.status === "rejected"
          })



          let timeRequested = new Date(approver.requestedOn);
          let timeSubmitted  = new Date(approver.respondedOn);
          const getFormattedDate = (date, text) =>{
            const isValidDate =  date instanceof Date && !isNaN(date);
            if(isValidDate){
              const outputText = text === "requested" ? "Requested on " : "Submitted on "
              const day = new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(date);
              const month = new Intl.DateTimeFormat("en-US", {month: "long"}).format(date);;
              const year = date.getFullYear();
              const hour = date.getHours();
              const ampm = hour >= 12 ? "pm" : "am";
              const minutes = date.getMinutes();
              const mins = minutes < 10 ? "0"+minutes : minutes;
              return outputText + day + ", " + month + " " + year + " at " + hour +":" + mins + " " + ampm;
            }

          }

          timeRequested = getFormattedDate(timeRequested, 'requested')
          timeSubmitted = getFormattedDate(timeSubmitted, 'submitted')

          return(
            <div key={index} >
              <span className={badgeIconName}></span>
              <p className={classes.title}>Approver {index + 1}</p>
              <span className={badgeClassName}>{approver.status}</span>
              <div>{timeRequested}</div>
              <div>{timeSubmitted}</div>

            </div>
          )
        })}

    </div>
  )
};

ApprovalView.propTypes = {
  approvals: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired
    })
  ).isRequired,
  selectedIndex: PropTypes.number.isRequired
};

export default ApprovalView;
