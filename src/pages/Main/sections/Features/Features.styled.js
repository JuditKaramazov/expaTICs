import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};
`;

export const Title = styled.h1`
  width: fit-content;
  margin: 1rem auto;
  color: #ff4f7e;
  font-size: ${(props) => props.theme.fontxxl};
  border-bottom: 2px solid ${(props) => props.theme.body};

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

export const Container = styled.div`
  width: 75%;
  display: flex;
  margin: 2rem auto;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
  }

  & > *::last-child {
    & > *::first-child {
      margin-top: 0;
    }
  }
`;

export const Box = styled.div`
  width: 45%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;
