import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import LocalHospitalRoundedIcon from "@material-ui/icons/LocalHospitalRounded";
import Badge from "@material-ui/core/Badge";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <LocalHospitalRoundedIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          COwin SLOT
        </Typography>
        <Button
          onClick={() => window.open("https://www.instagram.com/_abhi_1106/")}
          color="inherit"
        >
          <Badge badgeContent={1} color="error">
            <NotificationsRoundedIcon />
          </Badge>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
