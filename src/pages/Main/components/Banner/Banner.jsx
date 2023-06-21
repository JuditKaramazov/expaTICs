import React from "react";
import { Link } from "react-router-dom";
import { Section, ImgContainer, Title, BtnContainer, JoinNow } from "./Banner.styled";

const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src="/socialize.png" alt="Socially active person visual." />
        <img src="/coffeeSupport.png" alt="Coffee lover visual." />
        <img src="/communitySolidarity.png" alt="Solidary individual visual." />
        <img src="/mentalAwareness.png" alt="Mental awareness visual." />
        <img src="/buildingByCaring.png" alt="Person taking care of a plant visual." />
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
