import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  border-top: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  overflow: hidden;

  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  align-items: center;
  justify-content: center;
  opacity: 0.2;
  transform: translate(-50%, -50%);

  img {
    width: 15rem;
    height: auto;
  }

  @media (max-width: 48em) {
    width: 10rem;
    height: auto;
  }
`;

export const Title = styled.h1`
  width: 45%;
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontxxl};
  padding: 1rem 2rem;
  text-shadow: 1px 1px 2px;
  z-index: 10;

  em {
    color: #ff4f7e;
    font-style: normal;
  }

  @media (max-width: 64em) {
    width: 50%;
    font-size: ${(props) => props.theme.fontxl};
    text-align: center;
  }

  @media (max-width: 48em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontxl};
    padding: 2rem 0;
  }
`;

export const BtnContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`;

export const JoinNow = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-weight: 600;
  font-size: ${(props) => props.theme.fontlg};
  padding: 1.5rem 3rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  position: relative;
  transition: all 0.2s ease;

  @media (max-width: 48em) {
    padding: 1rem 2rem;
  }

  @media (max-width: 30em) {
    padding: 0.5rem 2rem;
    font-size: ${(props) => props.theme.fontsm};
  }

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    border: 2px solid ${(props) => props.theme.body};
    border-radius: 50px;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;
