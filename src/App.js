import React from "react";
import Delivery from "./view/Delivery";
import Main from "./layout/Main.jsx";
import Home from "./view/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./layout/Footer";
<<<<<<< HEAD
import Drinks from "./components/Drinks";
import Extras from "./components/Extras";
import Formules from "./components/Formules";
import Snacks from "./components/Snacks";
=======
import './App.css';
>>>>>>> origin/dev

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
             <Route
          exact
          path="/drinks"
          render={() => (
            <Main>
              <Drinks />
              <Footer />
            </Main>
          )}
        />
        <Route
          exact
          path="/extras"
          render={() => (
            <Main>
              <Extras />
              <Footer />
            </Main>
          )}
        />
        <Route
          exact
          path="/formules"
          render={() => (
            <Main>
              <Formules />
              <Footer />
            </Main>
          )}
        />
        <Route
          exact
          path="/snacks"
          render={() => (
            <Main>
              <Snacks />
              <Footer />
            </Main>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
