import React from "react";
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import ColorTracker from "../../../components/ColorTracker/ColorTracker";

export const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 95%;
  margin-left: 5rem;
  position: sticky;
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
}
`;

const Introduction = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;

  h2 {
    display: inline-block;
    margin-left: 6px;
    margin-bottom: 4px;
    position: relative;
  }

  h2::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #010101;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
  h2:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  p {
    margin-left: 6px;
  }
`;

export const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  display: flex;
  margin: 0 0 0 17rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;

    &>*: first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

export const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageBox = styled.div`
  width: 45%;
  margin-top: 50px;
  margin-right: 70px;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  justify-content: flex-start;
  padding: 10rem 20rem;
  background-image: url("/mentalAwareness.png");
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid transparent;
  border-radius: 20px;
  box-shadow: 10px 10px #d4f7d4;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

const CalendarContainer = styled.div`
.react-calendar {
  margin: 10px auto;
  width: 500px;
  max-width: 100%;
  background: #fdfbe8;
  border: 3px solid black;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  z-index: 3;
}

.react-calendar__navigation {
  background: pink;
  border-bottom: 4px solid #625151;
  height: 90px;
  border-radius: 20px 20px 0 0;

  span {
    font-size: 24px;
    font-weight: 600;
    color: #625151;
  }
}

.react-calendar__navigation button:disabled {
  background-color: pink;
  border-radius: 20px 20px 0 0;
}

.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background-color: pink;
  border-radius: 20px 20px 0 0;
}

.react-calendar__month-view {
  padding: 12px 32px;
  abbr {
    color: #625151;
    font-size: 16px;
    font-weight: 500;
  }
}

.react-calendar__month-view__weekdays {
  abbr {
    font-size: 18px;
    font-weight: 900;
  }
}

.react-calendar__tile {
  text-align: center;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: #d4f7d4;
    border-radius: 14px;
}

  .react-calendar__tile--now {
    background: pink;
    border-radius: 14px;
}

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ff4f7e;
    border-radius: 14px;
  }
`;

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