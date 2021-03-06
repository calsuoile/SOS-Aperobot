import React from "react";
import UpButton from "../components/UpButton.jsx";
import Header from "./Header.jsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    height: "100%",
    backgroundImage: "url('/assets/fond.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    bottom: "0",
  },
});

function Main(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      {children}
      <UpButton showBelow={250} />
    </div>
  );
}

export default Main;
