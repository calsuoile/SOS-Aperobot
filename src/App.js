import React from "react";
import Main from "./layout/Main.jsx";
import Home from "./view/Home.jsx";
import Header from "./layout/Header";

function App(props) {
  return (
    <div>
      <Main>
        <img
          style={{ width: "100%", height: "100%" }}
          src="assets/space1.jpg"
        />
        <Home />
      </Main>
      <Header />
    </div>
  );
}

export default App;
