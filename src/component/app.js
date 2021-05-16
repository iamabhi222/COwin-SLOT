import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../helper";
import landing from "./landing";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={landing} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
