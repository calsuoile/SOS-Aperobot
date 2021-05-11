import React from "react";
import Card from "./Card";

function CardList() {
  const sampleCocktails = [
    {
      name: "SpaceXperience",
      avatar: "assets/spaceXperience.jpg",
      isVirgin: false,
      ingredients: "Whitespirit, boulons, huile",
      price: "60 MartianCoin",
    },

    {
      name: "La Jupiter",
      avatar: "assets/jupiter.png",
      isVirgin: false,
      ingredients: "",
      price: "20 MartianCoin",
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
  ];
  const sampleSnacks = [
    {
      name: "Sachet de boulons à l’huile",
      avatar: "",
      price: "5 MartianCoin",
    },
    {
      name: "Sachet de vis nature",
      avatar: "",
      price: "5 MartianCoin",
    },
    {
      name: "Sachet de clous",
      avatar: "",
      price: "5 MartianCoin",
    },
    {
      name: "Sachet d’écrous à l’huile",
      avatar: "",
      price: "5 MartianCoin",
    },
    {
      name: "Rouleau de fil électrique",
      avatar: "",
      price: "6 MartianCoin",
    },
  ];
  const sampleFormules = [
    {
      name: "Formule 1",
      avatar: "",
      price: "70 MartianCoin",
    },
    {
      name: "Formule 2",
      avatar: "",
      price: "",
    },
    {
      name: "Formule 3",
      avatar: "",
      price: "",
    },
    {
      name: "Formule 4",
      avatar: "",
      price: "",
    },

    {
      name: "Formule premium",
      avatar: "",
      price: "",
    },
  ];

  const sampleExtras = [
    {
      name: "Feu d’artifices",
      avatar: "",
      price: "30 MartianCoin",
    },

    {
      name: "Déguisement R2D2",
      avatar: "",
      price: "",
    },
    {
      name: "Goodies de la WildCodeSchool",
      avatar: "",
      price: "",
    },
  ];

  return (
    <div style={{ marginTop: "100px" }}>
      {sampleCocktails.map((cocktail, index) => (
        <Card key={index} {...cocktail} />
      ))}
      {sampleSnacks.map((snack, index) => (
        <Card key={index} {...snack} />
      ))}
      {sampleFormules.map((formule, index) => (
        <Card key={index} {...formule} />
      ))}
      {sampleExtras.map((extra, index) => (
        <Card key={index} {...extra} />
      ))}
    </div>
  );
}

export default CardList;
