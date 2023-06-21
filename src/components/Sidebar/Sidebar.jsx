import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import AmbientSounds from "../AmbientSounds/AmbientSounds";
import { Modal } from "../Modal/Modal";

const Container = styled.div`
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

const Button = styled.button`
  display: flex;
  margin: 0.5rem 0 0 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
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

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

const Logo = styled.div`
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

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);

  padding: 2rem 0;

  position: absolute;
  top: 6rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

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

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;

  padding: 0.5rem 1rem;
  border: 2px solid var(--white);
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};

  background-color: var(--black);
  color: var(--white);

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

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    display: inline-block;
  }

  p {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);

    &:hover {
      text-decoration: underline;
    }
  }
`;

const PauseButton = styled.button`
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

const Sidebar = () => {
  // State variables.
  const [click, setClick] = useState(false);
  const [profileClick, setprofileClick] = useState(false);
  const [showAmbientSounds, setShowAmbientSounds] = useState(false);
  const [showModal, setShowModal] = useState(false); // New state for the modal.

  // Toggles click state.
  const handleClick = () => setClick(!click);
  const handleProfileClick = () => setprofileClick(!profileClick);
  const handleAmbientSoundsClick = () => {
    setShowAmbientSounds(!showAmbientSounds);
    setShowModal(true); 
  };

  return (
    <Container>
      <Button clicked={click} onClick={() => handleClick()}>
        +
      </ Button>
      <SidebarContainer>
        <Logo>
          <p>
            ⌇
          </p>
        </ Logo>
        <SlickBar clicked={click}>
          <Item
            onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to="/dashboard/menu"
          >
            <img src="/home-solid.svg" alt="Menu" />
            <Text clicked={click}>Menu</Text>
          </ Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/dashboard/community"
          >
            <img src="/social.svg" alt="Community" />
            <Text clicked={click}>Community</Text>
          </ Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/dashboard/solidarity"
          >
            <img src="/solidarity.svg" alt="Solidarity" />
            <Text clicked={click}>Solidarity</Text>
          </ Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/dashboard/support"
          >
            <img src="/support.svg" alt="Support" />
            <Text clicked={click}>Support</Text>
          </ Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/dashboard/privacy"
          >
            <img src="/privacy.svg" alt="Privacy" />
            <Text clicked={click}>Privacy</ Text>
          </ Item>
        </ SlickBar>

        <Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            src="https://picsum.photos/200"
            alt="Profile"
          />
          <Details clicked={profileClick}>
            <Name>
              <h4>Hey,&nbsp;dear</h4>
              <p>let's&nbsp;relax&nbsp;</p>
            </ Name>

            <PauseButton onClick={handleAmbientSoundsClick}>
              <img src="/pauseButton.svg" alt="Pause visual." />
            </ PauseButton>
          </ Details>
        </ Profile>
        <Modal showModal={showModal} setShowModal={setShowModal}>
        <AmbientSounds />
      </ Modal>
      </ SidebarContainer>
    </Container>
  );
};

export default Sidebar;
