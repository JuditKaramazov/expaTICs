import React, { useState } from "react";
import {
  Section,
  Introduction,
  Container,
  MessageBox
} from "./Support.styled";
import { MdHelpOutline } from "react-icons/md";
import { Modal } from "@/src/components/Modal/Modal";
import ChatHelp from "@/src/components/ChatHelp/ChatHelp";
import { useChat } from "ai/react";
import { FaPhone } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';


export default function Support() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [showModal, setShowModal] = useState(false);

  const handlePhoneIconClick = () => {
    window.open("https://europa.eu/youreurope/citizens/travel/security-and-emergencies/emergency/index_en.htm", "_blank");
  };

  const handleHeartIconClick = () => {
    window.open("https://www.mhe-sme.org/library/youth-helplines/", "_blank");
  };

  return (
    <Section>
      <Introduction>
        <h1>Sometimes, support</h1>
        <h2>is something that we require from the outside</h2>
        <p>and can't be found deep inside ourselves.</p>
        <p>International health insurance, visa types, or knowing
          where to go often feel like immense obstacles.</p>
        <h3 style={{ fontWeight: "200" }}>
          <br />
          <a href="https://europa.eu/youreurope/citizens/travel/security-and-emergencies/emergency/index_en.htm" target="_blank" rel="noopener noreferrer">
            <FaPhone size={25} onClick={handlePhoneIconClick} />
          </a>
          - <b>112</b>, European emergency phone number.
          <br />
          <a href="https://www.mhe-sme.org/library/youth-helplines/" target="_blank" rel="noopener noreferrer">
            <IoIosHeart size={25} onClick={handleHeartIconClick} />
          </a>
          - <b>116 123</b>, EU / EEA mental health helpline.
        </h3>
      </ Introduction>
      <Container>
        {messages.map((message) => (
          <MessageBox key={message.id} isUser={message.role === "user"}>
            {message.content}
          </MessageBox>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            placeholder="What can I help you with?"
            onChange={handleInputChange}
          />
          <span className="icon" onClick={() => setShowModal(true)}>
            <MdHelpOutline />
          </span>
        </form>
      </ Container>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ChatHelp />
      </ Modal>
    </ Section>
  );
}
