import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Container from './pages/container'

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route path={`/:id`} component={Container}/>
        </Switch>
    </Router>
  );
}
