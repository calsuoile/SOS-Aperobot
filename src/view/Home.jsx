import React from "react";
import Drinks from "../components/Drinks";
import Extras from "../components/Extras";
import Snacks from "../components/Snacks";
import PopUpValider from "../components/PopUpValider";

function Home() {
  return (
    <div>
      <br />
      <br />
      <h3
        style={{
          fontFamily: "Comfortaa",
          color: "#60AAFF",
          marginTop: "100px",
          marginLeft: "20px",
          marginRight: "20px",
          textAlign: "justify",
        }}
      >
        Comme tu nous as dit que PHP t'ennuyais, nous t'avons préparé une petite
        surprise. Commande l'apéro en quelques clics, ton pote reçoit la notif
        et viens chercher la commande à te livrer.
      </h3>
      <img
        style={{ width: "360px", marginTop: "20px" }}
        src="assets/2894.png"
        alt="homeBuddy"
      />
      <Drinks />
      <Snacks />
      <Extras />
      <PopUpValider />
    </div>
  );
}

export default Home;
