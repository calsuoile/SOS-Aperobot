import React from "react";
import Card from "./Card";
import { makeStyles } from "@material-ui/core";

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

function Drinks() {
  const classes = useStyles();

  const sampleCocktails = [
    {
      name: "SpaceXperience",
      avatar: "assets/spaceXperience.jpg",
      isVirgin: false,
      ingredients: "Whitespirit, boulons, huile",
      price: "60 MartianCoin",
    },

    {
      name: "Cosmospolitan",
      avatar: "assets/cosmospolitan.jpg",
      isVirgin: true,
      ingredients: "",
      price: "30 MartianCoin",
    },

    {
      name: "Gin Toxic",
      avatar: "assets/ginToxic.jpg",
      isVirgin: true,
      ingredients: "",
      price: "50 MartianCoin",
    },

    {
      name: "Virgin Marsguarita",
      avatar: "assets/v.marsgarita.jpg",
      isVirgin: false,
      ingredients: "",
      price: "25 MartianCoin",
    },

    {
      name: "Virgin Marstini",
      avatar: "assets/vMarstini.jpg",
      isVirgin: true,
      ingredients: "",
      price: "25 MartianCoin",
    },
    {
      name: "Sex on the Moon",
      avatar: "assets/sex-on-the-moon.jpg",
      isVirgin: false,
      ingredients: "",
      price: "50 MartianCoin",
    },
    {
      name: "Whisk ISS",
      avatar: "assets/whiskiss.jpg",
      isVirgin: false,
      ingredients: "",
      price: "40 MartianCoin",
    },
    {
      name: "Bloody Martian",
      avatar: "assets/bloody-marsian.jpg",
      isVirgin: false,
      ingredients: "",
      price: "30 MartianCoin",
    },
    {
      name: "Grog",
      avatar: "assets/grog.jpg",
      isVirgin: true,
      ingredients: "",
      price: "35 MartianCoin",
    },
    {
      name: "La Jupiter",
      avatar: "assets/jupiter.png",
      isVirgin: false,
      ingredients: "",
      price: "20 MartianCoin",
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
        Boissons
      </h1>
      <div className={classes.cardContainer}>
        {sampleCocktails.map((cocktail, index) => (
          <Card key={index} {...cocktail} />
        ))}
      </div>
    </div>
  );
}

export default Drinks;
