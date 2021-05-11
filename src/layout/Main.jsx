import React from "react";
import Header from "./Header.jsx";

function Main(props) {
  const { children } = props;

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Main;
