import React from "react";
import { Link } from "react-router-dom";
import { Section, ImgContainer, Title, BtnContainer, JoinNow } from "./Banner.styled";
import buildingByCaring from "@/public/assets/buildingByCaring.png"
import coffeeSupport from "@/public//assets/coffeeSupport.png";
import communitySolidarity from "@/public/assets/communitySolidarity.png";
import mentalAwareness from "@/public/assets/mentalAwareness.png";
import socialize from "@/public/assets/socialize.png";

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={ socialize } alt="Socially active person visual." />
        <img src={ coffeeSupport } alt="Coffee lover visual." />
        <img src={ communitySolidarity } alt="Solidary individual visual." />
        <img src={ mentalAwareness } alt="Mental awareness visual." />
        <img src={ buildingByCaring } alt="Person taking care of a plant visual." />
      </ ImgContainer>
      <Title>
        We can only build
        <br/>
        by <em>caring</em>.
      </ Title>
      <BtnContainer>
        <Link to="/login/">
            <JoinNow>Start the change</ JoinNow>
        </ Link>
      </ BtnContainer>
    </ Section>
  );
};

export default Banner;
