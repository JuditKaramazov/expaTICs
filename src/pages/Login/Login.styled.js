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
  justify-content: center;
  align-items: center;
`;

export const RegistrationImageContainer = styled.div`
  width: 95%;

  img {
    height: auto;
    width: 100%;
  }

  @media (max-width: 64em) {
    min-width: 60vh;
  }

  @media (max-width: 48em) {
    max-width: 50vh;
  }
`;

export const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  color: ${(props) => props.theme.body};
  background-color: #202020;
  border: 2px solid #ff4f7e;
  padding: 1.5rem;
  
  @media (max-width: 64em) {
    min-width: 50vh;
  }

  @media (max-width: 48em) {
    max-width: 40vh;
  }

  .form-header {
    padding: 2.5rem;
  }

  h1 {
    margin-bottom: 20px;
    color: #ff4f7e;
    font-size: 2rem;
    text-align: center;
  }

  em {
    font-size: 3rem;
    font-style: normal;
    -webkit-text-stroke: 0.3px whitesmoke;
    text-stroke: 0.3px whitesmoke;
  }

    input {
      width: 100%;
      margin: 3.2px;
      background: whitesmoke;
      font-size: 1rem;
      letter-spacing: 0.8px;
      line-height: 40px;
      border: 1px solid #ff4f7e;
      border-radius: 3px !important;
      text-align: center;

      &:focus {
        color: black;
        background-color: #ffddf4;
        border-color: #edd700;
      }
    }

    .forgotPassword {
      cursor: pointer;
  
      &:hover {
        color: #ff4f7e;
      }
    }
  
    .createAccount {
      cursor: pointer;
  
      &:hover {
        color: #ff4f7e;
      }
    }

    .error-message {
      color: red;
      margin-top: 10px;
    }
`;

export const RegisterButton = styled.button`
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  outline: none;
  border: none;
  font-weight: 100;
  font-size: ${(props) => props.theme.fontlg};
  padding: 0.8rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  @media (max-width: 48em) {
    padding: 0.6rem 2rem;
  }

  @media (max-width: 30em) {
    padding: 0.4rem 2rem;
    font-size: ${(props) => props.theme.fontsm};
  }

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #ff4f7e;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;
