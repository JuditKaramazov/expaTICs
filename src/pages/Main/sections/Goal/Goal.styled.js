import styled from "styled-components";

export const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  height: auto;
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

export const Container = styled.div`
  width: 75%;
  min-height: 85vh;
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
    margin-top: 1rem;

    &>*: first-child {
      width: 100%;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

export const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size:  ${(props) => props.theme.fontxl};
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    font-size: 1.5rem;
    color: ${(props) => props.theme.text};
  }

  em {
    color: transparent;
    font-size: 4.5rem;
    font-style: normal;
    -webkit-text-stroke: 4px #ff4f7e;
    text-stroke: 4px #ff4f7e;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontlg};

    em {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

export const SubTitle = styled.h3`
  width: 80%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-self: flex-end;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 400;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;
