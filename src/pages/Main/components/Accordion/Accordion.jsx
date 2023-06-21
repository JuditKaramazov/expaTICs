import React, { useState } from "react";
import { Container, Title, Name, Indicator, Reveal } from "./Accordion.styled";
import { Minus } from "@/public/assets/icons/Minus";
import { Plus } from "@/public/assets/icons/Plus";

const Accordion = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse)}>
        <Name>
          <span>{title}</span>
        </ Name>
        {collapse ? (
          <Indicator>
            <Minus />
          </ Indicator>
        ) : (
          <Indicator>
            <Plus />
          </ Indicator>
        )}
      </ Title>
      <Reveal clicked={collapse}>{children}</ Reveal>
    </ Container>
  );
};

export default Accordion;
