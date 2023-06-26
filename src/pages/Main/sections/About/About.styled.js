import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.text};
  position: relative;
`;

export const Container = styled.div`
  width: 75%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 70em) {
    width: 80%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }

  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;

export const Box = styled.div`
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

export const Title = styled.h2`
  width: 80%;
  margin: 0 auto;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  font-size: ${(props) => props.theme.fontxxl};

  em {
    color: #ff4f7e;
    font-style: normal;
  }

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

export const SubText = styled.p`
  width: 80%;
  margin: 1rem auto;
  align-self: flex-start;
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontmd};
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

export const SubTextLight = styled.p`
  width: 80%;
  margin: 1rem auto;
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  align-self: flex-start;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontsm};
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  display: flex;
  margin 1rem auto;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: auto;
    align-self: center;
  }

    button {
      margin: 0 auto;
    }
  }
`;
