import React from "react";
import { useChat } from "ai/react";

export default function Support() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      {
        messages.map(message => {
          return (
          <div key={message.id} className="whitespace-pre-wrap">
            {message.role === "user" ? "User: " : "AI: "}
            {message.content}
          </div>
        )
      })
    }

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          className="fixed w-full max-w-md bottom-0 border border-gray"
          placeholder="What can I help you with?"
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
