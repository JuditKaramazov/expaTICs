import React from "react";
import { GoalImageContainer } from "./GoalImage.styled";
import expaticsGoal from '@/public/assets/expaticsGoal.png'

const GoalImage = () => {
  return (
    <GoalImageContainer>
      <img src={expaticsGoal} alt='Usual intercultural problems chart.'/>
    </ GoalImageContainer>
  );
};

export default GoalImage;
