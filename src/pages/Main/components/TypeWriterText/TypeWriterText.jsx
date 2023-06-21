import React from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { Title, SubTitle, ButtonContainer } from "./TypeWriterText.styled";
import Button from "../../components/Button/Button";

const TypeWriterText = () => {
  return (
    <>
      <Title>
        expa<em>TIC</em>s
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("<span class='text-1'>Tighten.</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-2'>Immerse.</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-3'>Cooperate.</span>")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </ Title>
      <SubTitle>
        You are <b>not alone</b> on your journey.
        <br />
        Even if you feel like it,
        <br />
        know that you are still <b>not</b>.
        </ SubTitle>
      <ButtonContainer>
      <Link to="about" smooth={true} duration={500}>
        <Button text="Explore" link="about" /></ Link>
      </ ButtonContainer>
    </>
  );
};

export default TypeWriterText;
