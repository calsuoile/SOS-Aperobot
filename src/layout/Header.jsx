import React from "react";
import MenuBurger from "../components/MenuBurger";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  burger: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "black",
    margin: 0,
    alignItems: "center",
    position: "fixed",
    top: 0,
  },
});

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.burger}>
      <img
        style={{ width: "100%" }}
        src="assets/HEADER_apero.jpeg"
        alt="header"
      />
      <MenuBurger />
    </div>
  );
}

export default Header;
