import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

export const NavBar = styled.nav`
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  @media (max-width: 64em) {
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(2px);
    transform: ${(props) => (props.click ? "translateY(0)" : "translateY(1000%)")};
    transition: all 0.3s ease;
    touch-action: none;
    z-index: 50;
  }
`;

export const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;

export const HamburguerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  display: none;
  position: absolute;
  top: 2rem;
  left: 50%;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.text};
  transform: ${(props) => (props.click ? "translateX(-50%) rotate(90deg)" : "translateX(-50%) rotate(0)")};
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    display: flex;
  }

  &::after,
  &::before {
    content: " ";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    position: absolute;
    background: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }

  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  position: relative;
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontsm};
  background-color: ${(props) => props.theme.text};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  padding: 0.9rem 2.3rem;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    border: 2px solid ${(props) => props.theme.text};
    border-radius: 50px;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;
