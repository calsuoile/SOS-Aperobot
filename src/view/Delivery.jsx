import React from "react";
import ProgressBar from "../components/ProgressBar";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "85%",
    height: "calc(100vh - 450px)",
    [theme.breakpoints.up("sm")]: {
      margin: 0,
      height: "calc(100vh - 160px)",
    },
  },

  backToHome: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "black",
    marginTop: "100px",
    color: "#60AAFF",
    fontFamily: "'Comfortaa', cursive",
    border: "1px solid #60AAFF",
    width: "50%",
    "&:hover": {
      background: "#7046FF",
      fontSize: "15px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "300px",
      marginTop: "200px",
      fontSize: "20px",
      "&:hover": {
        fontSize: "20px",
      },
    },
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Delivery(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProgressBar />
      <div className={classes.buttonContainer}>
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <Button
            type="submit"
            onClick=""
            fullWidth
            variant="contained"
            color="primary"
            className={classes.backToHome}
          >
            Retourne à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Delivery;
