'use client'

import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Section, Container, Box, RegistrationImageContainer, FormBody, RegisterButton } from "./Login.styled";
import collaborateLogin from "@/public/assets/collaborateLogin.png";

const Login = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await login(email, password);
        navigate("/dashboard/");
      } catch (error) {
        // Handles login failure.;
        const errorMessage = error.message;
        console.log(errorMessage);
        setEmail("");
        setPassword("");
        setError("Login failed. Please try again.");
      }
    };

  return (
    <Section id="login">
      <Container>
        <Box>
          <RegistrationImageContainer>
            <img src={collaborateLogin} alt="People working together visual" />
          </ RegistrationImageContainer>

          <FormBody onSubmit={handleSubmit}>
            <div className="form-header">
              <div classname="form-title">
                <h1>
                  <em>L</em>og in to your account
                </h1>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  autoComplete="on"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  autoComplete="off"
                />
              </div>
            </div>
            <Link className="forgotPassword" type="link" to="/restorepassword/">
                Did you forget your password?
            </ Link>
            {error && <p className="error-message">{error}</p>}
            <RegisterButton type="submit">Log in</ RegisterButton>
            <div>
              <Link className="createAccount" type="link" to="/register/">
                Create an account
              </ Link>
            </div>
          </ FormBody>
        </ Box>
      </ Container>
    </ Section>
  );
};

export default Login;
