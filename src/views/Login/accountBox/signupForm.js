import React, { useContext } from "react";
import  {useState} from 'react'
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
const axios = require('axios');
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [cpassword, setCPassword] = useState("");

  const onChangeHandler = (event) =>{
    const { name, value } = event.currentTarget;
    if (name === "text"){
      setName(value);
      console.log(value);
    }
    else if (name === "email"){
      setEmail(value);
    }
    else if (name === "password"){
      setPassword(value);
    }
    else if (name === "cpassword"){
      setCPassword(value);
    }
  }
  const createUser = async ()=>{
    if (password === cpassword) {
    const data = {
      name: name,
      email: email, 
      password: password
    }
    console.log(data);
    await axios.post('http://localhost:8000/signup', data).then((response) => {
      alert("Signup Successful");
      setName("");
      setEmail("");
      setPassword("");
      setCPassword("");
    }).catch( (error)=>{console.log(error); });
  } else {
    alert("Password Don't Match");
    setPassword("");
    setCPassword("");
  }
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input name="text" value={name} onChange={(event) => { onChangeHandler(event) }} type="text" placeholder="Full Name" />
        <Input name="email" value={email} onChange={(event) => { onChangeHandler(event) }} type="email" placeholder="Email" />
        <Input name="password" value={password} onChange={(event) => { onChangeHandler(event) }} type="password" placeholder="Password" />
        <Input name="cpassword" value={cpassword} onChange={(event) => { onChangeHandler(event) }} type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={()=>{createUser()}}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
