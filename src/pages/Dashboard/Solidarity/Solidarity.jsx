import React, { useEffect, useState } from 'react';
import { AddIdeaForm } from '@/src/components/SolidaryForm/SolidaryForm';
import { SolidaryIdea } from '@/src/components/SolidaryIdea/SolidaryIdea';
import { generateId, getNewExpirationTime } from '@/src/utils/expirationTime';
import { Modal } from '@/src/components/Modal/Modal';
import CoffeeGift from '@/src/components/CoffeeGift/CoffeeGift';
import { Section, Introduction, FormContainer } from './Solidarity.styled';

function Solidarity()  {
  const [removedCount, setRemovedCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [ideas, setIdeas] = useState([
    {
      id: generateId(),
      text: 'This is a place for your personal, intransferible thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "No worries; they'll be removed after some seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addIdea = (idea) => {
    setIdeas(prev => [idea, ...prev]);
  };

  const removeIdea = (ideaId) => {
    setIdeas((prev) => prev.filter((item) => item.id !== ideaId));
    setRemovedCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (removedCount === 4) {
      setShowModal(true);
    }
  }, [removedCount]);

  useEffect(() => {
    if (!showModal) {
      setRemovedCount(0);
    }
  }, [showModal]);

  return (
    <Section>
      <Introduction>
        <h1>If solidarity could be</h1>
        <h2>expressed in plain words,</h2>
        <p>how would it look like?</p>
        <p>Wishes, worries... simply express yourself as you'd 
        want others to share their world with you.</p>
        <img src="/communitySolidarity.png" alt="Solidary individual visual." />
      </ Introduction>
      <FormContainer>
        <AddIdeaForm addIdea={addIdea} />
        <ul className="ideas">
          {ideas.map((idea) => (
            <SolidaryIdea key={idea.id} idea={idea} removeIdea={removeIdea} />
          ))}
        </ul>
      </ FormContainer>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <CoffeeGift />
      </ Modal>
    </ Section>
  );
};

export default Solidarity;
