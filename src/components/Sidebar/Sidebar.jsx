import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Button, SidebarContainer, Logo, SlickBar, Item, Text, Profile, Details, Name, PauseButton } from "./Sidebar.styled";
import AmbientSounds from "../AmbientSounds/AmbientSounds";
import { Modal } from "../Modal/Modal";

const Sidebar = () => {
  // State variables.
  const [click, setClick] = useState(false);
  const [profileClick, setprofileClick] = useState(false);
  const [showAmbientSounds, setShowAmbientSounds] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
            <img src="/home-solid.svg" alt="Menu." />
            <Text clicked={click}>Menu</Text>
          </ Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/dashboard/community"
          >
            <img src="/social.svg" alt="Community." />
            <Text clicked={click}>Community</Text>
          </ Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/dashboard/solidarity"
          >
            <img src="/solidarity.svg" alt="Solidarity." />
            <Text clicked={click}>Solidarity</Text>
          </ Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/dashboard/support"
          >
            <img src="/support.svg" alt="Support." />
            <Text clicked={click}>Support</Text>
          </ Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/dashboard/privacy"
          >
            <img src="/privacy.svg" alt="Privacy." />
            <Text clicked={click}>Privacy</ Text>
          </ Item>
        </ SlickBar>

        <Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            src="https://picsum.photos/200"
            alt="Profile picture example."
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
