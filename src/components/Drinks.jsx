import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function Drinks() {
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
    <div style={{marginTop: "100px"}}>
      <h1 style={{ fontFamily: "Comfortaa", marginLeft: "5px" }}>Boissons</h1>
      {sampleCocktails.map((cocktail, index) => (
        <Card key={index} {...cocktail} />
      ))}
    </div>
  );
}

export default Drinks;
