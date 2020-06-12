import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Container from './pages/container'
var moment = require('moment');

export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route exact path='/'>
                <Redirect to={`/${moment().date()}`}/>
            </Route>
            <Route path={`/:id`} component={Container}/>
        </Switch>
    </Router>
  );
}
