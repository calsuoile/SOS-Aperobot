import React from "react";
import Main from "./layout/Main.jsx";
import Home from "./view/Home.jsx";


function App(props) {
  return (
    <div>
      <Main>
        <Home />
      </Main>
    </div>
  );
}

export default App;
