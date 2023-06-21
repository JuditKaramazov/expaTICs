import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.carouselColor};
  margin: 3rem 0;

  @media (max-width: 48em) {
    margin: 2rem 0;
  }
`;

export const Title = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
`;

export const Indicator = styled.span`
  font-size: ${(props) => props.theme.fontxxl};

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
    height: auto;
    fill: ${(props) => props.theme.carouselColor};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

export const Reveal = styled.div`
  display: ${(props) => (props.clicked ? "block" : "none")};
  margin-top: 1rem;
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 300;
  line-height: 1.1rem;
`;