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
    marginBottom: "10px",
    textTransform: "capitalize",
    fontWeight: "bold",
    filter: "drop-shadow(0 0 3px #333)"
  },
  approverContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 20px 10px 20px",

  },
  badge: {
    borderRadius: "4px",
    backgroundColor: "#ccc",
    color: "#333",
    display: "flex",
    fontSize: "10px",
    textTransform: "uppercase",
    padding: "5px 4px",
    fontWeight: "bold"
  },
  approverDiv:{
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    flex: "1"
  },
  approved: {
    backgroundColor: "hsla(115, 29%, 71%, 1)"
  },
  rejected: {
    backgroundColor: "hsla(0, 100%, 50%, 0.48)"
  },
  icon:{
    alignSelf: "flex-start",
    color: "#737070",
    paddingRight: "15px",
    "&:before": {
      content: '"⧖"'
    }
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
  },
  timeContainer:{
    width: "100%",
    color: "#8e8e8e",
    fontSize: "11px"
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
            <div key={index} className={classes.approverContainer}>

              <div className={badgeIconName}></div>
              <div className={classes.approverDiv}>
                <div className={classes.title}>Approver {index + 1}</div>
                <div className={badgeClassName}>{approver.status}</div>
                <div className={classes.timeContainer}>{timeRequested}</div>
                <div className={classes.timeContainer}>{timeSubmitted}</div>
              </div>

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
