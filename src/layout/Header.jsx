import React from "react";
import MenuBurger from "../components/MenuBurger";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  burger: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "black",
    margin: 0,
    alignItems: "center",
    position: "fixed",
    top: 0,
    zIndex: 1,

    [theme.breakpoints.up("sm")]: {
      width: "100%",
      height: "100px",
      zINdex: 0,
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100px",
      justifyContent: "space-between",
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.burger}>
      <Link to="/">
        <img
          style={{ width: "266px" }}
          src="assets/HEADER_apero.jpeg"
          alt="header"
        />
      </Link>
      <MenuBurger />
    </div>
  );
}

export default Header;
