import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  border-bottom: 1px solid ${(props) => props.theme.carouselColor};
  cursor: pointer;
  padding: 1rem 0.5rem;

  @media (max-width: 48em) {
    margin: 2rem 0;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontsm};
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
`;

export const Indicator = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontxxl};

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
