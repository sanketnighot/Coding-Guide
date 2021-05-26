import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter } from 'react-router-dom';
//moe imorts
//main page imports
import Components from "../src/views/Components/Components";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Login from "../src/views/Login/Login";
import Contact from "../src/views/Contact/Contact";
import Project from "../src/views/Project/Project";
import Team from '../src/views/Team/Team';
import Chat from "../src/components/Chat/Chat";
import ViewProject from './views/Project/ViewProject';
var hist = createBrowserHistory();
ReactDOM.render(

    <Router history={hist}>
          <Switch>      
            <Route exact path="/" component={Components} />
            <Route path="/Login" component={Login} />
            <Route path="/Team" component={Team} />
            <Route path="/Project" component={Project} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Chat" component={Chat} />
            <Route path="/ViewProject" component={ViewProject} />
          </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
