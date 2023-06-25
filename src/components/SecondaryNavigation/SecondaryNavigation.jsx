'use client'

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Section, NavBar, Menu, MenuItem, HamburguerMenu, StyledLink } from "./SecondaryNavigation.styled";
import Logo from "../Logo/Logo";
import { AuthContext } from "../../context/AuthContext";

const SecondaryNavigation = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  const handleSignOut = async () => {
    const success = await logOut();
    if (success) {
      navigate("/main/");
    }
  };

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  return (
    <Section id="navigation">
      <NavBar>
        <Logo />
        <HamburguerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </ HamburguerMenu>
        <Menu click={click}>
          {/* <MenuItem onClick={() => scrollTo("/dashboard/privacy")}>Your privacy</ MenuItem> */}
          <MenuItem>
            <div className="mobile">
            <StyledLink to="/main" onClick={handleSignOut}>
            Sign Out
          </ StyledLink>
            </div>
          </ MenuItem>
        </ Menu>
        <div className="desktop">
        <StyledLink to="/main" onClick={handleSignOut}>
            Sign Out
          </ StyledLink>
        </div>
      </ NavBar>
    </ Section>
  );
};

export default SecondaryNavigation;
