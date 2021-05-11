import React from 'react';
import Header from './layout/Header';
import Delivery from './view/Delivery';
import Main from "./layout/Main.jsx";
import Home from "./view/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardList from './components/CardList';

function App(props) {
  return (
    <div>
  
      <Header />
      <Main>
        <img
          style={{ width: "100%", height: "100%", margin: 0 }}
          src="assets/space1.jpg"
        />
        <Home />
        <Delivery />
      </Main>
    </div>
  );
}

export default App;
