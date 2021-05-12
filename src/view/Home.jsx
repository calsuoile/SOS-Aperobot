import React from "react";
import Accueil from "../components/Accueil";
import CardList from "../components/CardList";
import PopUpValider from "../components/PopUpValider";

function Home() {
  return (
    <div>
      <Accueil />
      <CardList />
      <PopUpValider />
    </div>
  );
}

export default Home;
