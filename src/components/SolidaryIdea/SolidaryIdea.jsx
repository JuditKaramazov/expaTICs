import React, { useEffect } from 'react';

export function SolidaryIdea(props) {
    const { idea, removeIdea } = props;

  const handleRemoveClick = () => {
    removeIdea(idea.id);
  };

  useEffect(() => {
    const timeRemaining = idea.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      removeIdea(idea.id);
    }, timeRemaining);
    return () => {
      clearTimeout(timeout);
    };
  }, [idea, removeIdea]);

  return (
    <li className="Idea">
      <button
        aria-label="Remove idea"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{idea.text}</div>
    </li>
  );
}
