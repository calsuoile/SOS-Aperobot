import React from "react";
import Card from "./Card";

function Extras() {
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
      <h1>Boissons</h1>
      {sampleExtras.map((extra, index) => (
        <Card key={index} {...extra} />
      ))}
    </div>
  );
}

export default Extras;
