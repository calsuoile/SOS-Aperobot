import React from "react";
import Drinks from "../components/Drinks";
import Extras from "../components/Extras";
import Snacks from "../components/Snacks";
import PopUpValider from "../components/PopUpValider";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pic: {
    width: "360px",
    marginTop: "20px",
    [theme.breakpoints.up("sm")]: {
      padding: "10px",
      width: "470px",
    },
    [theme.breakpoints.down("md")]: {
      width: "360px",
    },
  },
  presentation: {
    fontFamily: "Comfortaa",
    color: "#60AAFF",
    marginTop: "100px",
    marginLeft: "20px",
    marginRight: "20px",
    textAlign: "justify",
    [theme.breakpoints.up("sm")]: {
      width: "600px",
      fontSize: "30px",
    },
  },
  presentationContainer: {
    paddingTop: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "row",
      margin: "90px 100px 0 100px",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.presentationContainer}>
        <h3 className={classes.presentation}>
          Tes journées sur Mars sont longues et ennuyeuses ? Nous t'avons
          préparé une petite surprise. Commande l'apéro en quelques clics, ton
          pote reçoit la notif, vient chercher la commande et te la livre.
        </h3>
        <img src="assets/2894.png" alt="homeBuddy" className={classes.pic} />
      </div>
      <div>
        <Drinks />
        <Snacks />
        <Extras />
      </div>
      <PopUpValider />
    </div>
  );
}

export default Home;
