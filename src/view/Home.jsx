import React from "react";
import Drinks from "../components/Drinks";
import Extras from "../components/Extras";
import Snacks from "../components/Snacks";
import PopUpValider from "../components/PopUpValider";

function Home() {
  return (
    <div>
      <img
        style={{ width: "360px", marginTop: "80px" }}
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
