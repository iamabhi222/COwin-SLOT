import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import { Divider } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card style={{ margin: "10px 0 0", boxShadow: "none" }}>
        <Typography
          style={{ fontSize: "20px", margin: "10px 0", textAlign: "center" }}
          variant="h6"
          component="h1"
        >
          HOW WE WORK
        </Typography>
        <Divider style={{ margin: "0 17px" }} />
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <NotificationsRoundedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  style={{ fontSize: "12px" }}
                  variant="h6"
                  component="h1"
                >
                  Subscribe
                </Typography>
                <Typography style={{ fontSize: "10px" }}>
                  We will notify you!
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  style={{ fontSize: "12px", textAlign: "left" }}
                  variant="h6"
                  component="h1"
                >
                  Server
                </Typography>
                <Typography style={{ fontSize: "10px", textAlign: "left" }}>
                  Server will check for availability every 5 min!
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <MailRoundedIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  style={{ fontSize: "12px" }}
                  variant="h6"
                  component="h1"
                >
                  Mail
                </Typography>
                <Typography style={{ fontSize: "10px" }}>
                  You will get a mail if slot is available!
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Card>
    </React.Fragment>
  );
}
