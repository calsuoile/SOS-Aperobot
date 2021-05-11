import { Router } from "express";
import React from "react";
import Header from "./layout/Header";
import Delivery from "./view/Delivery";
import React from "react";
import Main from "./layout/Main.jsx";
import Home from "./view/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./layout/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Main>
              <Home />
              <Footer />
            </Main>
          )}
        />
        <Route
          exact
          path="/delivery"
          render={() => (
            <Main>
              <Delivery />
              <Footer />
            </Main>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
