import React from "react";
import Drinks from "../components/Drinks";
import Extras from "../components/Extras";
import Formules from "../components/Formules";
import Snacks from "../components/Snacks";

function Home() {
  return (
    <div>
      <Drinks />
      <Snacks />
      <Formules />
      <Extras />
    </div>
  );
}

export default Home;
