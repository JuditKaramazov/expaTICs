import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  animation: smoothStart 0.7s ease-in;

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
`;

export const ModalMessage = styled.div`
  display: flex;
  height: 500px;
  width: 600px;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 16px;
  text-align: center;
  padding: 10px;
  padding-inline: 1.5rem;
  background-color: whitesmoke;
  border: solid 4px #29abe1;;
  border-radius: 20px;

  h1 {
    margin-bottom: 3px;
    color: #29abe1;

    &:hover {
        text-decoration: underline;
    }
  }

  h2 {
    margin: 10px;
    font-size: 1.3rem;
  }

  h3 {
    margin: 15px;
    font-size: 1.7rem;

    &:hover {
      font-size: 1.8rem;
      text-decoration: underline;
    }
  }

  .sound-list {
    margin: 5px;
    font-size: 18px;
    text-transform: capitalize;
    padding: 1rem;
    background-color: #94b9db;
    border: 1px solid black;
    border-radius: 15px;
  }

  .sound-item {
    margin: 2px;
    cursor: pointer;

    &:hover {
        font-weight: bold;
        background: linear-gradient(to right, #ff4f7e 30%, #1b1b1b 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
  }
`;
