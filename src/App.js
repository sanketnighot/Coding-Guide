import React from 'react';
//for histoty saving
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//main page imports
import Components from "../src/views/Components/Components"

var hist = createBrowserHistory();

export default function App() {
    return (
        <Router history={hist}>
    <Switch>      
      <Route path="/" component={Components} />
    </Switch>
  </Router>
    )
}
