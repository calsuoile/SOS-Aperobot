import React from "react";
import MenuBurger from "../components/MenuBurger";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  burger: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "black",
    margin: 0,
    alignItems: "center",
    position: "fixed",
    top: 0,
    zIndex: 1,
  },
});

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.burger}>
      <Link to="/">
        <img
          style={{ width: "100%" }}
          src="assets/HEADER_apero.jpeg"
          alt="header"
        />
      </Link>
      <MenuBurger />
    </div>
  );
}

export default Header;
