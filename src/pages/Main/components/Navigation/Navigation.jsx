'use client'

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Section, NavBar, HamburguerMenu, Menu, MenuItem } from "./Navigation.styled";
import Button from "../../components/Button/Button";
import Logo from "../../../../components/Logo/Logo";


const Navigation = () => {
  const [click, setClick] = useState(false);

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
          <MenuItem onClick={() => scrollTo("home")}>Home</ MenuItem>
          <MenuItem onClick={() => scrollTo("about")}>About</ MenuItem>
          <MenuItem onClick={() => scrollTo("goal")}>Goal</ MenuItem>
          <MenuItem onClick={() => scrollTo("features")}>Features</ MenuItem>
          <MenuItem>
            <div className="mobile">
              <Link to="/login/">
                <Button text="Get Started" />
              </ Link>
            </div>
          </ MenuItem>
        </ Menu>
        <div className="desktop">
          <Link to="/login/">
            <Button text="Get Started" />
          </ Link>
        </div>
      </ NavBar>
    </ Section>
  );
};

export default Navigation;
