import React, { useState } from "react";
import { Link } from "@reach/router";
import Button from '@material-ui/core/Button';
import {FirebaseSignup} from './firebase/FirebaseApp'
import {CircularProgress} from '@material-ui/core'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler =
        (event, email, name, username, password, cpassword) => {
            if (password === cpassword) {
                try {
                    event.preventDefault();
                    FirebaseSignup(name, username, email, password)
                } catch (error) {
                    alert(error);
                }
            }
            else {
                alert("Pasword and Confirm Password dose not match ... Please try again")
            }
            setEmail("");
            setUsername("");
            setPassword("");
            setName("");
            setcPassword("");
        };

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'email') {
            setEmail(value);
        }
        else if (name === 'password') {
            setPassword(value);
        }
        else if (name === 'cpassword') {
            setcPassword(value);
        }
        else if (name === 'username') {
            setUsername(value);
        } else if (name === 'name') {
            setName(value);
        } 
    };


    return (
        <>
            <div>
                <form autocomplete="off">
                    <input type="text" className="form-control mt-4" placeholder="Enter Your Name" required value={name} name="name" onChange={(event) => { onChangeHandler(event) }} autofocus autocomplete="off"/>
                    <input type="text" className="form-control mt-4" placeholder="Enter Your Username" required value={username} name="username" onChange={(event) => { onChangeHandler(event) }} autocomplete="off"/>
                    <input type="email" className="form-control mt-4" placeholder="Enter Your Email-Id" required value={email} name="email" onChange={(event) => { onChangeHandler(event) }} autocomplete="off"/>
                    <input type="password" className="form-control mt-4" placeholder="Enter Your Password" required value={password} name="password" onChange={(event) => { onChangeHandler(event) }} autocomplete="off"/>
                    <input type="password" className="form-control mt-4" placeholder="Confirm Your Password" required value={cpassword} name="cpassword" onChange={(event) => { onChangeHandler(event) }} autocomplete="off"/>
                    <div className="mt-5">
                        <Button variant="contained" color="secondary" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, name, username, password, cpassword)}}>SignUp</Button>
                    </div>
                </form>
            </div>
        </>)
}

export default Signup;