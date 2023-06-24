import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from '@/src/utils/expirationTime';

export function AddIdeaForm(props) {
  const [text, setText] = useState('');
  
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const idea = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    }
    if (text.length > 0) {
      props.addIdea(idea);
      setText('');
    }
  };

  return (
    <form className="AddIdeaForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
