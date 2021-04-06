import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {FirebaseLogin} from './firebase/FirebaseApp';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const loginWithEmailAndPasswordHandler =
        (event, email, password) => {
                try {
                    event.preventDefault();
                   const response = FirebaseLogin(email, password)
                    alert(response);
                } catch (error) {
                    alert(error);
                }            
            setEmail("");
            setPassword("");
        };

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'email') {
            setEmail(value);
        }
        else if (name === 'password') {
            setPassword(value);
        }
    };


    return (
        <>
            <div>
                <form>
                    <input type="email" className="form-control mt-4" placeholder="Enter Your Email-Id" required autofocus autocomplete="off" value={email} name="email" onChange={(event) => { onChangeHandler(event) }}/>
                    <input type="password" className="form-control mt-4" placeholder="Enter Your Password" required autofocus autocomplete="off" value={password} name="password" onChange={(event) => { onChangeHandler(event) }}/>
                    <div className="mt-5">
                        <Button variant="contained" color="Success">Login</Button> <Button color="secondary" onClick = {(event) => {loginWithEmailAndPasswordHandler(event, email, password)}}>Forgot Password</Button>
                    </div>
                </form>
            </div>
        </>)
}

export default Login;