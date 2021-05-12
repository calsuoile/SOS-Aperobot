import React from "react";
import Card from "./Card";

function Extras() {
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
    <div style={{ marginTop: "100px" }}>
      <h1 style={{ fontFamily: "Comfortaa", marginLeft: "5px" }}>Extras</h1>
      {sampleExtras.map((extra, index) => (
        <Card key={index} {...extra} />
      ))}
    </div>
  );
}

export default Extras;
