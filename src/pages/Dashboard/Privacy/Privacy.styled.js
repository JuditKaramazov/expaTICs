import styled from "styled-components";

export const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 90%;
  position: absolute;
  background-image: url("/vectorImage.png");
  background-repeat: no-repeat;
  background-position: center;
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
`;

export const Title = styled.h1`
  width: fit-content;
  display: flex;
  margin: 0.2rem auto 2rem;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontxxl};
  border-bottom: 2px solid ${(props) => props.theme.text};

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

export const Container = styled.div`
  width: 70%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;

export const Items = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      background: #d4f7d4;
      border-radius: 50px 0 50px 0;
      text-align: right;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align: left;

        p {
          border-radius: 40px 0 40px;
        }
      }
    }

    p {
      border-radius: 40px 0 40px 0;
    }
  }

  & > *:nth-of-type(2n) {
    justify-content: end;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      background: #d4f7d4;
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

export const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;

export const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  border: 3px solid black;
  padding: 1rem;

  @media (max-width: 48em) {
    width: 70%;
  }
`;

export const Box = styled.p`
  height: fit-content;
  position: relative;
  background: #fdfbe8;
  border: 1px solid black;
  padding: 1rem;
`;

export const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;

export const Text = styled.span`
  display: block;
  margin: 0.5rem 0;
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 400;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
