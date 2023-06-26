'use client'

import React, { useState } from "react";
import { Link } from "react-scroll";
import Carousel from "../../components/Carousel/Carousel";
import Button from "../../components/Button/Button";
import { ThemeProvider } from "styled-components";
import { dark } from "../../../../styles/Themes";
import { Section, Container, Box, Title, SubText, SubTextLight, ButtonContainer } from "./About.styled";


const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const subTexts = [
    "It always starts with a trip, no matter the reason behind it.",
    "Integration, community support, and collaboration should always come first.",
    "We're going through an era full of ideas and utilities facilitating our lives.",
  ];

  const subTextsLight = [
    "Discovering a new reality is exciting, but sometimes, we can't help but feel out of place.",
    "But this new reality doesn't belong to us, and the constant reminders don't make it any easier.",
    "However, there are not as many references guiding our steps as we would wish.",
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <Section id="about">
      <Container>
        <Box>
          <Carousel
            onSlideChange={handleSlideChange}
            subTexts={subTexts}
            subTextsLight={subTextsLight}
          />
        </ Box>
        <Box>
          <Title>The expa<em>TIC</em>s initiative.</ Title>
          <SubText>{subTexts[activeIndex]}</ SubText>
          <SubTextLight>{subTextsLight[activeIndex]}</ SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Link to="goal" smooth={true} duration={500}>
                <Button text="Sounds familiar?" />
              </ Link>
            </ ThemeProvider>
            </ ButtonContainer>
        </ Box>
      </ Container>
    </ Section>
  );
};

export default About;
