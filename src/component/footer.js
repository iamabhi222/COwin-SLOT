import React from "react";
import Divider from "@material-ui/core/Divider";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Divider
          style={{
            margin: "15px 0 5px",
          }}
        />

        <div
          style={{
            margin: "10px 0",
            width: "100%",
            textAlign: "center",
            height: "40px",
            padding: "20px 0 0",
            background: "#4051B5",
            color: "white",
          }}
        >
          - Developed by&nbsp;
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://www.instagram.com/_abhi_1106/"
          >
            Abhishek
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
