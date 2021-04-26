import React, { useContext } from "react";
import {useState} from "react";
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

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  const onChangeHandler = (event) =>{
    const { name, value } = event.currentTarget;
    if (name === "email"){
      setEmail(value);
    }
    else if (name === "password"){
      setPassword(value);
    }
  }
  const fetchUser = async ()=>{
    await fetch(`http://localhost:8000/user-email=${email}&password=${password}`).then((response) => response.json()).then((data)=>{
      if (data.message) {
      alert("Login Failed");
    } else {
      alert(`Name: ${data.name}`);
    }
    });
  }
  return (
    <BoxContainer>
      <FormContainer>
      <Input name="email" value={email} onChange={(event) => { onChangeHandler(event) }} type="email" placeholder="Email" />
      <Input name="password" value={password} onChange={(event) => { onChangeHandler(event) }} type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={()=>{fetchUser()}}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
