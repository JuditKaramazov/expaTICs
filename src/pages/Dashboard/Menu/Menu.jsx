import React from "react";
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

const Menu = () => {
  const {
    selectedDate,
    handleDateChange,
    handleColorChange,
    tileClassName,
    tileContent,
    colorMap,
  } = ColorTracker();

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
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="dark-grey">Dark Grey</option>
            </select>
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
    </ Section>
  );
};

export default Menu;