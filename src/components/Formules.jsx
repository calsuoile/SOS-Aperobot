import React from "react";
import Card from "./Card";

function Formules() {
  const sampleFormules = [];
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
