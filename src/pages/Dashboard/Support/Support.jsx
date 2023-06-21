import React from "react";
import { useChat } from "ai/react";

export default function Support() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col">
      {messages.length > 0 &&
        messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            {m.role === "user" ? "User: " : "AI: "}
            {m.content}
          </div>
        ))}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="What can I help you with?"
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
