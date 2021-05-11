import { Router } from 'express';
import React from 'react';
import Header from './layout/Header';


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
    </div>
  );
}

export default App;