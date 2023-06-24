import React, { useState } from 'react';
import { AddIdeaForm } from '@/src/components/SolidaryForm/SolidaryForm';
import { SolidaryIdea } from '@/src/components/SolidaryIdea/SolidaryIdea';
import { generateId, getNewExpirationTime } from '@/src/utils/expirationTime';
import styled from 'styled-components';

const FormContainer = styled.div`
margin: 0 auto;
  max-width: 600px;
  width: 100%;

  .AddIdeaForm {
    display: flex;
    flex-wrap: wrap;
  }

  .AddIdeaForm input {
    padding: 1.5rem;
    border: 1px solid #666;
    border-radius: 4px;
  }
  
  .AddIdea input[type='text'] {
    flex-grow: 1;
    margin-right: 0.5rem;
  }

  .ideas {
    list-style-type: none;
    padding: 0;
  }
  
  .Idea {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 3px;
    background-color: #eee;
  }
  
  .Idea .remove-button {
    font-size: 80%;
    float: right;
    border: 0;
    border-radius: 3px;
    background: transparent;
  }
  
  .Idea .remove-button:hover {
    color: #fff;
    background-color: #000;
  }

`;


function Solidarity()  {
  const [ideas, setIdeas] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addIdea = (idea) => {
    setIdeas(prev => [idea, ...prev]);
  };

  const removeIdea = (ideaId) => {
    setIdeas((prev) => prev.filter(item => item.id !== ideaId));
  };

  return (
    <div>
      <h1>Solidarity</h1>
      <FormContainer>
        <AddIdeaForm addIdea={addIdea} />
        <ul className="ideas">
          {ideas.map((idea) => (
            <SolidaryIdea key={idea.id} idea={idea} removeIdea={removeIdea} />
          ))}
        </ul>
      </ FormContainer>
    </div>
  );
};

export default Solidarity;
