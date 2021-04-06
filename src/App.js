import React from 'react';
//for histoty saving
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//main page imports
import Components from "../src/views/Components/Components";
import Login from "../src/views/Login/Login";


var hist = createBrowserHistory();

export default function App() {
    return (
      <>
      {/* <div>
        <Header/>
      </div> */}
        <Router history={hist}>
          <Switch>      
            <Route path="/" component={Components} />
            <Route path="/About" component={Login} />
            <Route path="/Login" component={Login} />
            <Route path="/Login" component={Login} />
          </Switch>
        </Router>
      </>
    )
}
