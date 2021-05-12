import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "row",
    listStyle: "none",
    color: "#60AAFF",
    backgroundColor: "#000000",
    textAlign: "center",
    // margin: "0 auto",
    fontSize: "100%",
    height: "80px",
    bottom: 0,
    width: "100%",
  },
});

function Footer(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <p>© SOS APEROBOT</p>
      <img
        style={{ height: "25px", marginLeft: "10px", borderRadius: "7px" }}
        src="assets/logo_fb1.jpg"
        alt="logo-fb"
      />
      <img
        style={{ height: "25px", margin: "5px", borderRadius: "7px" }}
        src="assets/logo_insta1.jpg"
        alt="logo-insta"
      />
    </div>
  );
}

export default Footer;
