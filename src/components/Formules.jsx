import React from "react";
import Card from "./Card";

function Formules() {
  const sampleFormules = [
    {
      name: "Formule premium",
      avatar: "assets/zouz.jpg",
      price: "250 MartianCoin",
    },
  ];
  return (
    <div style={{ marginTop: "100px" }}>
      <h1 style={{ fontFamily: "Comfortaa", marginLeft: "5px" }}>Formules</h1>
      {sampleFormules.map((formule, index) => (
        <Card key={index} {...formule} />
      ))}
    </div>
  );
}
export default Formules;
