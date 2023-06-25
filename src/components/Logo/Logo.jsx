import React from "react";
import { Link } from "react-router-dom";
import { LogoText } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoText>
      <Link to="/"><em>⌇</em>xp.</ Link>
    </ LogoText>
  );
};

export default Logo;
