import styled from "styled-components";

export const Section = styled.section`
  min-height: calc(100vh - ${(props) => props.theme.navHeight});
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-left: 5rem;
  margin-right: 1rem;
  position: relative;
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
  }

  @media (max-width: 30em) {
    width: 95%;
    margin: 0 30px 0 30px;
    font-size: ${(props) => props.theme.fontsm};
  }
`;

export const Introduction = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;

  h2 {
    display: inline-block;
    margin-left: 6px;
    margin-bottom: 4px;
    position: relative;
  }

  h2::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #010101;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
  h2:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  p {
    margin-left: 6px;
  }

  @media (max-width: 30em) {
    width: 90%;
    margin-left: 50px;
    font-size: ${(props) => props.theme.fontsm};
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  align-items: stretch;
  padding-top: 6rem;
  padding-bottom: 6rem;

  .input-container {
    position: fixed;
    bottom: 0.2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 1rem);
    max-width: 36rem;
    margin-bottom: 1rem;
    z-index: 1;
  }

  input {
    width: 100%;
    outline: none;
    border: 1px solid #cbd5e0;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  .icon {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: -3rem;
    margin-top: -2.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
  }

  .icon svg {
    width: 1.5rem;
    height: 1.5rem;
    color: darkgray;

    &:hover {
      color: pink;
    }
  }
`;

export const MessageBox = styled.div`
  max-width: 70%;
  margin: 0.5rem;
  padding: 1rem;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  background-color: ${(props) => (props.isUser ? "#d1e5f1" : "#fdfbe8")};
  border-radius: 10px;
  border: 1px solid ${(props) => (props.isUser ? "#6faed9" : "#e6e6e6")};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
