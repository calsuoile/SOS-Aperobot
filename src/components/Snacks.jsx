import React from "react";
import Card from "./Card";

function Snacks() {
  const sampleSnacks = [
    {
      name: "Sachet de boulons à l’huile",
      avatar: "assets/sachet-boulons.jpeg",
      price: "5 MartianCoin",
    },
    {
      name: "Sachet de vis nature",
      avatar: "assets/vis.jpg",
      price: "5 MartianCoin",
    },
    {
      name: "Sachet de clous",
      avatar: "assets/clous.jpeg",
      price: "5 MartianCoin",
    },
    {
      name: "Sachet d’écrous à l’huile",
      avatar: "assets/ecrous.jpeg",
      price: "5 MartianCoin",
    },
    {
      name: "Rouleau de fil électrique",
      avatar: "assets/fil-electrique.jpeg",
      price: "6 MartianCoin",
    },
  ];
  return (
    <div>
      <h1 style={{ fontFamily: "Comfortaa", color: "#60AAFF", textAlign: "center", paddingTop: "80px"}}>Snacks</h1>
      {sampleSnacks.map((snack, index) => (
        <Card key={index} {...snack} />
      ))}
    </div>
  );
}

export default Snacks;
