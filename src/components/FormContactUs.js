import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {fbContactForm} from './firebase/FirebaseApp'


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function FormContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const classes = useStyles();

    const sendContactForm =
        (event, name, email, message) => {
            fbContactForm(name, email,message);
        };

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'name') {
            setName(value);
        }
        else if (name === 'email') {
            setEmail(value);
        } 
        else if (name === 'message') {
            setMessage(value);
        } 
    };



    return (
        <form>
            <input type="text" className="form-control mt-4" placeholder="Enter Your Name" required autofocus autocomplete="off" value={name} name="name" onChange={(event) => { onChangeHandler(event) }}/>
            <input type="email" className="form-control mt-4" placeholder="Enter Your Email-Id" required autofocus autocomplete="off" value={email} name="email" onChange={(event) => { onChangeHandler(event) }}/>
            <input type="textfeild" className="form-control mt-4" placeholder="Enter Your Message" required autofocus autocomplete="off" value={message} name="message" onChange={(event) => { onChangeHandler(event) }}/>
            <div className="mt-5">
                <Button variant="contained" color="Success" onClick = {(event) => {sendContactForm(event, name, email, message)}}>Send</Button>
            </div>
        </form>
    );
}
