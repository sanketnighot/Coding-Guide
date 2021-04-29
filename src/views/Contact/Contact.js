import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
//import components
import Header from "../../components/Header/Header";
import HeaderLinks from '../../components/Header/HeaderLinks';
// import image from "../../assets/img/bg4.jpg"

import styles from "../../assets/jss/material-kit-react/views/components";
import Footer from '../../components/Footer/Footer';
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
const useStyles = makeStyles(styles);
const axios = require('axios');
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


export default function Contact(props) {
    const classes = useStyles();    
    const { ...rest } = props;
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [subject, setSubject] = useState("");
    var [message, setMessage] = useState("");
    const onChangeHandler = (event) =>{
        const { name, value } = event.currentTarget;
        if (name === "email"){
          setEmail(value);

        }
        else if (name === "name"){
          setName(value);
        }
        else if (name === "message"){
            setMessage(value);
          }
        else if (name === "subject"){
            setSubject(value);
          }
    }

    const sendForm = async ()=>{
        if (name === "" || email === "" || subject === "" || message === ""){
            alert("Please enter all the fields ...")
        }
        else {
        const data = {
          name: name,
          email: email,
          subject: subject,
          message: message
        }
        console.log(data);
        await axios.post('http://localhost:8000/contactform', data).then((response) => {
          alert("Form Submitted Successfully !!!");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        }).catch( (error)=>{console.log(error);});
      }
    }



    return (
        <>
                <Header
                    // color="transparent"
                    brand="CodeHub"
                    rightLinks={<HeaderLinks/>}
                    {...rest}
                />
                <div className={classes.main}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={6}>
                        <MDBContainer>
                            <h2 className="h1-responsive font-weight-bold text-center my-5">
                                Contact us
                            </h2>
                            <p className="text-center w-responsive mx-auto pb-5">
                                Any Question or remarks? Just Write us a message!
                            </p>
                            <MDBRow>
                                <MDBCol md="9" className="md-0 mb-5">
                                <form>
                                    <MDBRow>
                                    <MDBCol md="6">
                                        <div className="md-form mb-0">
                                        <MDBInput name="name" value={name} onChange={(event) => { onChangeHandler(event) }} type="text" id="contact-name" label="Your name" required />
                                        </div>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <div className="md-form mb-0">
                                        <MDBInput name="email" value={email} onChange={(event) => { onChangeHandler(event) }}
                                            type="text"
                                            id="contact-email"
                                            label="Your email"
                                        required />
                                        </div>
                                    </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                    <MDBCol md="12">
                                        <div className="md-form mb-0">
                                        <MDBInput name="subject" value={subject} onChange={(event) => { onChangeHandler(event) }} type="text" id="contact-subject" label="Subject" required />
                                        </div>
                                    </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                    <MDBCol md="12">
                                        <div className="md-form mb-0">
                                        <MDBInput name="message" value={message} onChange={(event) => { onChangeHandler(event) }}
                                            type="textarea"
                                            id="contact-message"
                                            label="Your message"
                                        required />
                                        </div>
                                    </MDBCol>
                                    </MDBRow>
                                </form>
                                <div className="text-center text-md-left">
                                    <MDBBtn color="primary" size="md" onClick={() => {sendForm()}}>
                                    Send
                                    </MDBBtn>
                                </div>
                                </MDBCol>
                                <MDBCol md="3" className="text-center">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                    <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
                                    <p>{name}</p>
                                    </li>
                                    <li>
                                    <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
                                    <p>{email}</p>
                                    </li>
                                    <li>
                                    <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
                                    <p>{subject}</p> <br/>
                                    <p>{message}</p>
                                    </li>
                                </ul>
                                </MDBCol>
                            </MDBRow>
                            </MDBContainer>
                        </GridItem>
                    </GridContainer>
                </div>
            <Footer/>
        </>
    )
}
