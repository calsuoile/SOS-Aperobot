import React from "react";
import UpButton from "../components/UpButton.jsx";
import Header from "./Header.jsx";

function Main(props) {
  const { children } = props;

  return (
    <div>
      <Header />
      {children}
      <UpButton showBelow={250} />
    </div>
  );
}

export default Main;
