import React, { useState } from "react";
import { Section, Introduction, Container, MessageBox } from "./Support.styled";
import { MdHelpOutline } from "react-icons/md";
import { Modal } from "@/src/components/Modal/Modal";
import ChatHelp from "@/src/components/ChatHelp/ChatHelp";
import { useChat } from "ai/react";

export default function Support() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [showModal, setShowModal] = useState(false);

  return (
    <Section>
      <Introduction>
        <h1>Sometimes, support</h1>
        <h2>is something that we require from the outside</h2>
        <p>and can't be found deep inside ourselves.</p>
        <p>International health insurance, visa types, or knowing 
          where to go often feel like immense obstacles.</p>
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
