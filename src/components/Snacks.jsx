import React from "react";
import Card from "./Card";

function Snacks() {
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
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Snack</h1>
      {sampleSnacks.map((snack, index) => (
        <Card key={index} {...snack} />
      ))}
    </div>
  );
}

export default Snacks;
