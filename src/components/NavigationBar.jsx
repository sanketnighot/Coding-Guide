import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import firebase from "firebase/app";
import Container from '../components/container/Container';
require('firebase/auth');
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'

const firebaseConfig = {
	apiKey: "AIzaSyAXJtph7xZ0hkJ5Ekkp-ZoQo43uRQOq0tU",
	authDomain: "fir-apps-df369.firebaseapp.com",
	databaseURL: "https://fir-apps-df369.firebaseio.com",
	projectId: "fir-apps-df369",
	storageBucket: "fir-apps-df369.appspot.com",
	messagingSenderId: "1032755084411",
	appId: "1:1032755084411:web:e2e61e0fde70fd090b36de",
	measurementId: "G-XCEZEDXK16"
};
const luser = false;

function NavigationBar() {
    useEffect(() => {
        if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                luser = true;
            } else {
                luser = false;
            }
        });
    });

    return (
        <>



            <div className="col-md-10">
                <Navbar className="shadow-lg p-3 mb-5 bg-white rounded" expand="lg" fixed="top">
                    <Navbar.Brand href="/" style={{ fontFamily: 'Montserrat' }}>
                        <h3><strong className="ml-3 pl-4" style={{ textShadow: "2px 2px grey" }}> {"< "}Code HUB{" />"} </strong></h3>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="mr-2">
                            <Nav.Item>
                                <Nav.Link href="/" eventKey="link-1">Home</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="projects" eventKey="link-3">Projects</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="http://127.0.0.1:8000/" eventKey="link-4">Coding HUB</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="about" eventKey="link-2">About</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="contact" eventKey="link-5">Contact Us</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="collab" eventKey="link-6">Collab</Nav.Link>
                            
                            </Nav.Item>

                            <Nav.Item>
                                {luser === true ?
                                    <NavDropdown title="My Account" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/"> Logout</NavDropdown.Item>
                                    </NavDropdown> :
                                    <NavDropdown title="My Account" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/loginsignup">Login/Sign up</NavDropdown.Item>
                                    </NavDropdown>}
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
}

export default NavigationBar