import React from 'react';
import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  left: 0;
  top: 0;
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

export const Modal = ({ children, showModal, setShowModal }) =>
  showModal && (
    <Overlay id="modal" onClick={() => setShowModal(false)}>
      <ModalMessage id="message" onClick={(e) => e.stopPropagation()}>
        {children}
      </ ModalMessage>
    </ Overlay>
  );