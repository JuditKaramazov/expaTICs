'use client'

import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Section, Container, Box, RegistrationImageContainer, FormBody, RegisterButton } from "./Register.styled";

const Register = () => {
    const { signUp } = useContext(AuthContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    };
  
    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      signUp(email, password, firstName, lastName);
      navigate("/login/");
    };
  
    return (
      <Section id="registration">
        <Container>
          <Box>
            <RegistrationImageContainer>
              <img src="/connectRegister.png" alt="Colorful jigsaw visual." />
            </ RegistrationImageContainer>
  
            <FormBody onSubmit={handleSubmit}>
              <div className="form-header">
                <div className="form-title">
                  <h1>
                    <em>C</em>reate an account
                  </h1>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    autoComplete="on"
                    required
                  />
                </div>
  
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    minLength="6"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <RegisterButton type="submit">Sign up</ RegisterButton>
              <div>
                <Link className="logInToAccount" type="link" to="/login/">
                  Log in to your account
                </ Link>
              </div>
            </ FormBody>
          </ Box>
        </ Container>
      </ Section>
    );
  };
  
  export default Register;
