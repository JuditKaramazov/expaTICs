import styled from "styled-components";

export const Title = styled.h2`
  width: 80%;
  color: ${(props) => props.theme.text};
  font-size:  ${(props) => props.theme.fontxxxl};
  align-self: flex-start;

  span {
    text-transform: uppercase;
  }

  em {
    color: transparent;
    font-size: 5rem;
    font-style: normal;
    -webkit-text-stroke: 4px #ff4f7e;
    text-stroke: 4px #ff4f7e;
  }

  .text-1 {
    color: orange;
  }

  .text-2 {
    color: #29abe1;
  }

  .text-3 {
    color: #ff4f7e;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

export const SubTitle = styled.h3`
  width: 80%;
  margin-bottom: 1rem;
  align-self: flex-start;
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 400;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;
