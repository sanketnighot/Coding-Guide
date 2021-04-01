import React from 'react'
import NavigationBar from './components/NavigationBar';
import { Route, Switch } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact';
import Home from './components/Home'
import Projects from './components/Projects';
import CodingZone from './components/CodingZone';
import Error from './components/Error';
import Profile from './components/Profile';
import LoginSignup from './components/LoginSignup';
import Test from './components/Test';
function App() {
	return (
		<>
			<div className=".container-md mt-3">
				<div className=".row justify-content-md-center">
					<NavigationBar />
				</div>
				<div className="row justify-content-md-center">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={Test} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/codingzone" component={CodingZone} />
						<Route exact path="/projects" component={Projects} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/loginsignup" component={LoginSignup} />
						<Route component={Error} />
					</Switch>
				</div>
			</div>
		</>
	);
}

export default App;
