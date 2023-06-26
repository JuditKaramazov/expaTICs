import styled from "styled-components";

export const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

export const Container = styled.div`
  min-height: 80vh;
  width: 75%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  
  @media (max-width: 48em) {
    width: 100%;
    flex-direction: column-reverse;

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
  align-items: center;
  justify-content: center;
`;

export const RegistrationImageContainer = styled.div`
  width: 80%;

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
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.body};
  background-color: #202020;
  border: 3px solid orange;
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
    color: orange;
    font-size: 2rem;
    text-align: center;
  }
  
  em {
    font-size: 3rem;
    font-style: normal;
    -webkit-text-stroke: 0.5px whitesmoke;
    text-stroke: 0.5px whitesmoke;
  }
  
  p {
    margin: 10px;
    font-size: 1.2rem;
    text-align: center;
  }

  input {
    width: 100%;
    margin: 3.2px;
    background: whitesmoke;
    font-size: 1rem;
    letter-spacing: 0.8px;
    line-height: 40px;
    border: 1px solid orange;
    border-radius: 3px !important;
    text-align: center;

    &:focus {
      color: black;
      background-color: #FABA5F;
      border-color: #edd700;
    }
  }

  .backToLogin {
    cursor: pointer;

    &:hover {
      color: orange;
    };
  }
}
`;

export const RegisterButton = styled.button`
  display: inline-block;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-weight: 100;
  font-size: ${(props) => props.theme.fontlg};
  padding: 0.8rem 3rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;

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
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    border: 2px solid orange;
    border-radius: 50px;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.2s ease;
  }

  &:hover::after {
    padding: 0.3rem;
    transform: translate(-50%, -50%) scale(1);
  }
`;
