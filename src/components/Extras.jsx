import React from "react";
import Card from "./Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
  },
}));

function Extras() {
  const classes = useStyles();

  const sampleExtras = [
    {
      name: "Feu d’artifices",
      avatar: "assets/petard.jpg",
      price: "30 MartianCoin",
    },

    {
      name: "Déguisement R2D2",
      avatar: "assets/R2D2.jpeg",
      price: "",
    },
    {
      name: "Goodies de la WildCodeSchool",
      avatar: "assets/flat.png",
      price: "30 MartianCoin",
    },
    {
      name: "Formule premium",
      avatar: "assets/zouz.jpg",
      price: "250 MartianCoin",
    },
  ];
  return (
    <div>
      <h1
        style={{
          fontFamily: "Comfortaa",
          color: "#60AAFF",
          textAlign: "center",
          paddingTop: "80px",
        }}
      >
        Extras
      </h1>
      <div className={classes.cardContainer}>
        {sampleExtras.map((extra, index) => (
          <Card key={index} {...extra} />
        ))}
      </div>
    </div>
  );
}

export default Extras;
