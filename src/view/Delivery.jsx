import React from "react";
import ProgressBar from "../components/ProgressBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginBottom: "85%",
  },
});

function Delivery(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProgressBar />
    </div>
  );
}

export default Delivery;
