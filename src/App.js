import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Data from "./Data";
import Ranking from "./Ranking";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/ranking" component={Ranking} />
          <Route exact path="/data" component={Data} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
