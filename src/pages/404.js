import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.section`
  width: 100%;
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  min-height: 80vh;
  width: 75%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 64em) {
    width: 85%;
  }

  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;

    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const ErrorImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

const ErrorLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 100;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  padding: 0.8rem 3rem;
  position: relative;
  outline: none;
  transition: all 0.2s ease;

  @media (max-width: 48em) {
    padding: 0.6rem 2rem;
  }

  @media (max-width: 30em) {
    padding: 0.4rem 2rem;
    font-size: ${(props) => props.theme.fontsm};
  }

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: ' ';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    border: 2px solid #ff4f7e;
    border-radius: 50px;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

const Title = styled.h2`
  width: 80%;
  margin: 0 auto;
  color: #ff4f7e;
  font-size: 2.8rem;
  text-align: center;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
`;

const SubText = styled.p`
  width: 80%;
  margin: 1rem auto;
  color: ${(props) => props.theme.body};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-align: center;

  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontlg};
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const NotFoundPage = () => {
    return (
      <Section id="error">
        <Container>
          <Box>
            <ErrorImageContainer>
              <img src="/errorPage.png" alt="Doubtful young man." />
            </ ErrorImageContainer>
          </ Box>
          <Box>
            <Title>
              Oh, no...
              <br />
              ...
            </ Title>
            <SubText>
              It seems you've stumbled upon a page that doesn't exist!
            </ SubText>
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              <ErrorLink>
                Go back
              </ ErrorLink>
            </ Link>
          </ Box>
        </ Container>
      </ Section>
    );
  };
  
  export default NotFoundPage;