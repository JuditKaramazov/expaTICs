import styled from "styled-components";

export const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

export const Container = styled.div`
  width: 75%;
  min-height: 80vh;
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

    &>*:first-child {
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

export const RegistrationImageContainer = styled.div`
  width: 55%;

  img {
    max-height: auto;
    width: 100%;
  }

  @media (max-width: 64em) {
    min-width: 37vh;
  }

  @media (max-width: 48em) {
    max-width: 30vh;
  }
`;

export const FormBody = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.body};
  background-color: #202020;
  border: 2px solid #8ad0ed;
  padding: 1.5rem;

  @media (max-width: 64em) {
    min-width: 50vh;
  }

  @media (max-width: 48em) {
    max-width: 55vh;
  }

  .form-header {
    padding: 2.5rem;
  }

  h1 {
    margin-bottom: 20px;
    color: #29abe1;
    font-size: 2rem;
    text-align: center;
  }

  em {
    font-size: 3rem;
    font-style: normal;
    -webkit-text-stroke: 0.6px whitesmoke;
    text-stroke: 0.6px whitesmoke;
  }

  input {
    width: 100%;
    margin: 3.2px;
    background: whitesmoke;
    font-size: 1rem;
    letter-spacing: 0.8px;
    line-height: 40px;
    border: 1px solid #29abe1;
    border-radius: 3px !important;
    text-align: center;

    &:focus {
      color: black;
      background-color: #8ad0ed;
      border-color: #edd700;
    }
  }

  .logInToAccount {
    cursor: pointer;

    &:hover {
      color: #29abe1;
    }
  }
}
`;

export const RegisterButton = styled.button`
  display: inline-block;
  position: relative;
  margin-top: -10px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 100;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  padding: 0.8rem 3rem;
  transition: all 0.2s ease;

  @media (max-width: 48em) {
    padding: 0.6rem 2rem;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 0.4rem 2rem;
  }

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    border: 2px solid #29abe1;
    border-radius: 50px;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;
