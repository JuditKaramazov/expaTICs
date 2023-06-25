import React from 'react';
import { Overlay, ModalMessage } from './Modal.styled';

export const Modal = ({ children, showModal, setShowModal }) =>
  showModal && (
    <Overlay id="modal" onClick={() => setShowModal(false)}>
      <ModalMessage id="message" onClick={(e) => e.stopPropagation()}>
        {children}
      </ ModalMessage>
    </ Overlay>
  );
