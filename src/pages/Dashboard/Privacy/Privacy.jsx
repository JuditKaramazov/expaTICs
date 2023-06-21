import React  from "react";
import styled from "styled-components";
import vectorImage from "@/public/assets/vectorImage.png";

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 90%;
  position: absolute;
  background-image: url(${vectorImage});
  background-repeat: no-repeat;
  background-position: center;
  animation: smoothStart 2s ease-in;

  @keyframes smoothStart {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.2rem auto 2rem;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
      background: #d4f7d4;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align: left;

        p {
          border-radius: 40px 0 40px;
        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
      background: #d4f7d4;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid black;

  @media (max-width: 48em) {
    width: 70%;
  }
`;

const Box = styled.p`
  height: fit-content;
  padding: 1rem;
  position: relative;
  border: 1px solid black;
  background: #fdfbe8;
`;

const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;

const Text = styled.span`
  display: block;
  margin: 0.5rem 0;
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 400;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const PrivacyItem = ({ title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</ SubTitle>
          <Text>{subtext}</ Text>
        </ Box>
      </ ItemContainer>
    </ Item>
  );
};

const Privacy = () => {
  return (
    <Section id="privacy">
      <Title>Your privacy</ Title>
      <Container>
        <Items>
          <PrivacyItem
          title="You matter."
          subtext="And we want you to feel respected. That's the reason why we choose you as a priority, no matter the many (and empty) numbers and statistics."
          />
          <PrivacyItem
          title="We're here."
          subtext="But we won't invade what belongs to you only - no one should. Your data, your time, your 'safe place'; it all stays between the two of us."
          />
          <PrivacyItem
          title="You're heard."
          subtext="Still, you are the one deciding who listens. This small project doesn't attempt to push the boundaries you so bravely established."
          />
          <PrivacyItem
          title="Repeat: I matter."
          subtext="And that's why we'll treat your data with the same care we all should treat ourselves. Stay safe, please - and treat yourself kindly."
          />
        </Items>
      </Container>
    </Section>
  )
}

export default Privacy;
