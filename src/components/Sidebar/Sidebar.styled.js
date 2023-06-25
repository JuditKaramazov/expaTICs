import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  background-color: transparent;
  z-index: 4;

  .active {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

export const Button = styled.button`
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  position: relative;
  margin: 0.5rem 0 0 0.5rem;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    height: 2px;
    width: 1rem;
    background-color: var(--white);
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

export const SidebarContainer = styled.div`
  width: 3.5rem;
  height: 80vh;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  position: relative;
  align-items: center;
  justify-content: space-between;
  background-color: var(--black);
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
`;

export const Logo = styled.div`
  width: 1.6rem;
  height: auto;

  p {
    color: #ff4f7e;
    font-size: 3rem;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

export const SlickBar = styled.ul`
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 6rem;
  left: 0;
  align-items: center;
  color: var(--white);
  background-color: var(--black);
  border-radius: 0 30px 30px 0;
  list-style: none;
  padding: 2rem 0;
  transition: all 0.5s ease;
`;

export const Item = styled(NavLink)`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  padding-left: 1rem;
  color: var(--white);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

export const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};
  color: var(--white);
  background-color: var(--black);
  border: 2px solid var(--white);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

export const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;

  h4 {
    display: inline-block;
  }

  p {
    color: var(--grey);
    font-size: 0.8rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const PauseButton = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;

    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;
