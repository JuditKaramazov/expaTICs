import React from "react";
import { Section, Container, Box, Title, SubTitle } from "./Goal.styled";
import GoalImage from "../../components/GoalImage/GoalImage";

const Goal = () => {
  return (
    <Section id="goal">
      <Container>
        <Box>
          <Title>
            There's no specific
            <br />
            <em>reason</em>.
          </ Title>
          <SubTitle>
            Everything is <b>valid</b>, and what truly prevails is our{" "}
            <b>importance</b> as <b>individuals</b>.
            <br />
            For some, it started like a new <b>adventure</b>; for others, their
            circumstances forced them to abandon the only place they ever
            called <b>home</b>.
            <br />
            <br />
            What about <b>you</b>?
          </ SubTitle>
          <Title>
            There's no specific
            <br />
            <em>origin</em>.
          </ Title>
          <SubTitle>
            Every situation is worth our <b>attention</b>, <b>support</b>, and{" "}
            <b>care</b>.
            <br />
            Pretending that nothing happens is <b>not</b> a solution. There are
            not many things that we can do, but we're here to{" "}
            <b>listen to others</b>.
            <br />
            <br />
            What's <b>your</b> story?
          </ SubTitle>
          <Title>
            <span>Find a community, share, embrace your vulnerability.</span>
          </ Title>
        </ Box>
        <Box>
          <GoalImage />
        </ Box>
      </ Container>
    </ Section>
  );
};

export default Goal;
