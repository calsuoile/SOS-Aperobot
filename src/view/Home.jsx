import React from "react";
import Drinks from "../components/Drinks";
import Extras from "../components/Extras";
import Formules from "../components/Formules";
import Snacks from "../components/Snacks";
import PopUpValider from "../components/PopUpValider";

function Home() {
  return (
    <div>
      <Drinks />
      <Snacks />
      <Formules />
      <Extras />
      <PopUpValider />
    </div>
  );
}

export default Home;
