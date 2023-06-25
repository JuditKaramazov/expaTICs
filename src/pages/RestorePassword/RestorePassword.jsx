'use client'

import React, { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { 
  Section, 
  Container, 
  Box, 
  RegistrationImageContainer, 
  FormBody,
  RegisterButton
 } from "./RestorePassword.styled";

const RestorePassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(emailRef.current.value);
      toast.success("Password restoration email sent!");

      setTimeout(() => {
        navigate("/login/");
      }, 5000);
    } catch (error) {
      console.log(error);
      toast.error("Failed to restore password.");
    }
  };
  
  return (
    <Section id="restorePassword">
      <ToastContainer />
      <Container>
        <Box>
          <RegistrationImageContainer>
            <img src="/forgotPassword.png" alt="Colorful question marks visual." />
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
