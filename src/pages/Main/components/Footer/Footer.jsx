import React from "react";
import { Section, Container, Left, IconList, MenuItems, Item, Bottom } from "./Footer.styled";
import Banner from "../Banner/Banner";
import Logo from "@/src/components/Logo/Logo";
import Instagram from "@/public/assets/icons/Instagram";
import Twitter from "@/public/assets/icons/Twitter";
import LinkedIn from "@/public/assets/icons/LinkedIn";

const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a
              href="https://www.instagram.com/miss.oranjediscodancer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com/V_Karamazov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/in/juditlazaromoyano"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </ IconList>
        </ Left>
        <MenuItems>
          <Item onClick={() => scrollTo("home")}>Home</Item>
          <Item onClick={() => scrollTo("about")}>About</Item>
          <Item onClick={() => scrollTo("goal")}>Goal</Item>
          <Item onClick={() => scrollTo("features")}>Features</Item>
        </ MenuItems>
      </ Container>
      <Bottom>
        <span>
          &copy; 2023,
          Judit Lázaro, IT Academy. All rights reserved.
        </span>
        <span>
          Be the change &#10084;
        </span>
      </ Bottom>
    </ Section>
  );
};

export default Footer;
