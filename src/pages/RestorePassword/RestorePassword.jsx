'use client'

import React, { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Section, Container, Box, RegistrationImageContainer, FormBody, RegisterButton } from "./RestorePassword.styled";
import forgotPassword from "@/public/assets/forgotPassword.png";

const RestorePassword = () => {
  const emailRef = useRef();
  const { resetPassword, error, setError, message, setMessage } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      setError("");

      await resetPassword(emailRef.current.value);
      setMessage("Now, just follow the instructions we sent you - and see you soon!");
    } catch (error) {
      setError("There was an unexpected error while restoring your password.");
      console.log(error);
    }
  };

  return (
    <Section id="restorePassword">
      <Container>
        <Box>
          <RegistrationImageContainer>
            <img src={forgotPassword} alt="Colorful question marks visual." />
          </ RegistrationImageContainer>

          <FormBody onSubmit={handleSubmit}>
            <div className="form-header">
              <div className="form-title">
                <h1>
                  <em>R</em>estore your password
                </h1>
                <p>
                  Please remember that we are all oblivious, in a way - but we've got you covered!
                  <br />
                  <br />
                  Just write down your email, and you'll hear from us very soon!
                  <br />
                  &hearts;
                </p>
                <input type="email" placeholder="Email" autoComplete="on" ref={emailRef} required />
              </div>
            </div>
            <RegisterButton type="submit">Restore</ RegisterButton>
            <div>
              <Link className="backToLogin" type="link" to="/login/">
                Back to Login page
              </ Link>
            </div>
          </ FormBody>
        </ Box>
      </ Container>
    </ Section>
  );
};

export default RestorePassword;
