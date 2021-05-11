import { Router } from 'express';
import React from 'react';
import Header from './layout/Header';
import Delivery from './view/Delivery';
import React from "react";
import Main from "./layout/Main.jsx";
import Home from "./view/Home.jsx";

function App(props) {
  return (
    <div>
       <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main>
               
              </Main>
            )}
          />
        </Switch>
       </Router>
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
