import React from "react";
import Card from "./Card";

function Formules() {
  const sampleFormules = [
    {
      name: "Formule premium",
      avatar: "",
      price: "",
    },
  ];
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Formule</h1>
      {sampleFormules.map((formule, index) => (
        <Card key={index} {...formule} />
      ))}
    </div>
  );
}
export default Formules;
