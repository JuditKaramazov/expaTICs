import React from "react";
import { Section, Container, Box } from "./Home.styled";
import CoverImage from "../../components/CoverImage/CoverImage";
import TypeWriterText from "../../components/TypeWriterText/TypeWriterText";

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <TypeWriterText />
        </ Box>
        <Box>
          <CoverImage />
        </ Box>
      </ Container>
    </ Section>
  );
};

export default Home;
