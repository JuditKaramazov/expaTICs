import React from "react";
import { Container } from "./Support.styled";
import { useChat } from "ai/react";

export default function Support() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Container>
      {
        messages.map(message => {
          return (
          <div key={message.id} className="message-box">
            {message.role === "user" ? "User: " : "AI: "}
            {message.content}
          </div>
        )
      })
    }

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="What can I help you with?"
          onChange={handleInputChange}
        />
      </form>
    </ Container>
  );
}
