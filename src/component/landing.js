import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import axios from "../apis";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import LinearProgress from "@material-ui/core/LinearProgress";
import Alert from "@material-ui/lab/Alert";
import Navbar from "./navbar";
import Timeline from "./timeline";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import Footer from "./footer";
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pin: "",
      open: false,
      onprocess: false,
      message: "",
    };
  }

  handleClick = async (e) => {
    this.setState({ onprocess: true });
    e.preventDefault();
    try {
      const { data } = await axios.post("/", this.state);
      data.message === "Success"
        ? this.setState({
            open: true,
            onprocess: false,
            message: "Registered Successfully",
          })
        : data.message === "Email"
        ? this.setState({
            open: true,
            onprocess: false,
            message: "Email already present!",
          })
        : this.setState({
            open: true,
            onprocess: false,
            message: "Server Error!",
          });
    } catch (err) {
      this.setState({
        open: true,
        onprocess: false,
        message: err.message,
      });
    }
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    if (this.state.onprocess) {
      return (
        <React.Fragment>
          <Navbar />
          <LinearProgress style={{ margin: "5px 0" }} />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Navbar />
        <Timeline />

        <Card style={{ marginTop: "8px" }}>
          <CardContent>
            <Typography
              style={{
                fontSize: "20px",

                textAlign: "center",
              }}
              variant="h6"
              component="h1"
            >
              SUBSCRIBE NOW
            </Typography>
            <Divider style={{ margin: "10px" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <form onSubmit={this.handleClick}>
                <TextField
                  required
                  onChange={(e) => this.setState({ pin: e.target.value })}
                  style={{ width: "100%", margin: "20px 0 0" }}
                  id="outlined-basic-1"
                  label="pin code"
                  variant="outlined"
                  size="small"
                  helperText="Please enter the pincode"
                  type="number"
                />
                <TextField
                  required
                  type="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  style={{ width: "100%", margin: "10px 0" }}
                  id="outlined-basi-2"
                  label="email"
                  variant="outlined"
                  size="small"
                  helperText="Please enter your email"
                />
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "100%" }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={this.state.open}
          autoHideDuration={4000}
          onClose={this.handleClose}
          message={this.state.message}
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={this.handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
        <Alert style={{ margin: "20px 0" }} severity="info">
          This is not an official cowin site!
        </Alert>
        <Alert severity="success">
          Get subscribed and we will notify you when a vaccination slot is
          available in your area!
        </Alert>
        <Alert style={{ margin: "20px 0" }} severity="success">
          For more details visit https://www.cowin.gov.in/home
        </Alert>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Landing;
