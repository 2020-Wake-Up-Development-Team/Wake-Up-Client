import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Data from "./Data";
import Ranking from "./Ranking";

function App() {
  const baseUrl = "http://172.30.1.45:5000";
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/ranking"
            render={() => <Ranking baseUrl={baseUrl} />}
          />
          <Route exact path="/data" render={() => <Data baseUrl={baseUrl} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
