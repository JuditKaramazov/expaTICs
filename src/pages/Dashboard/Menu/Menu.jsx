import React, { useState } from "react";
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import { 
  Section,
  Introduction,
  Container,
  Box,
  ImageBox,
  CalendarContainer
 } from "./Menu.styled";
import ColorTracker from "../../../components/ColorTracker/ColorTracker";
import { MdHelpOutline } from 'react-icons/md';
import { Modal } from "@/src/components/Modal/Modal";
import ColorTrackerHelp from "@/src/components/ColorTrackerHelp/ColorTrackerHelp";

const Menu = () => {
  const {
    selectedDate,
    handleDateChange,
    handleColorChange,
    tileClassName,
    tileContent,
    colorMap,
  } = ColorTracker();

  const [showModal, setShowModal] = useState(false);

  return (
    <Section>
      <Introduction>
        <h1>Welcome to your</h1>
        <h2>personal space.</h2>
        <br/>
        <p>Feel free to keep track (or not) of your state.</p>
        <p>Stay safe.</p>
      </ Introduction>
      <Container>
        <Box>
          <ImageBox />
        </ Box>
        <Box>
          <div>
            <label htmlFor="colorSelect">Choose a color: </label>
            <select
              id="colorSelect"
              value={colorMap[selectedDate.toISOString().split('T')[0]] || ''}
              onChange={handleColorChange}
            >
              <option value="">None</option>
              <option value="pink">Pink</option>
              <option value="skyblue">Blue</option>
              <option value="tomato">Red</option>
              <option value="midnightblue">Midnight</option>
              <option value="orchid">Orchid</option>
              <option value="saddlebrown">Brown</option>
              <option value="mediumseagreen">Green</option>
              <option value="orange">Orange</option>
              <option value="silver">Silver</option>
            </select>
            <span className="icon" onClick={() => setShowModal(true)}>
              <MdHelpOutline />
            </span>
          </div>
          <CalendarContainer>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              locale="en"
              tileClassName={tileClassName}
              tileContent={tileContent}
            />
          </ CalendarContainer>
        </ Box>
      </ Container>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ColorTrackerHelp />
      </ Modal>
    </ Section>
  );
};

export default Menu;