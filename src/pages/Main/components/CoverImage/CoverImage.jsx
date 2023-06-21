import React from "react";
import { CoverImageContainer } from "./CoverImage.styled";
import expaticsMain from "@/public/assets/expaticsMain.png";

const CoverImage = () => {
  return (
    <CoverImageContainer>
      <img src={expaticsMain} alt='Healthy collaboration visual.'/>
    </ CoverImageContainer>
  );
};

export default CoverImage;
