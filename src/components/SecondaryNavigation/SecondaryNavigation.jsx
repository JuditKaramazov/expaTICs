import React, { useContext, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Section, NavBar, Menu, MenuItem, HamburguerMenu, StyledLink } from "./SecondaryNavigation.styled";
import Logo from "../Logo/Logo";
import { AuthContext } from "../../context/AuthContext";

const SecondaryNavigation = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { logOut } = useContext(AuthContext);

  const handleSignOut = async () => {
    const success = await logOut();
    if (success) {
      navigate("/");
    }
  };

  const isLoginPage = location.pathname === "/login/";
  const isRegisterPage = location.pathname === "/register/";
  const isRestorePasswordPage = location.pathname === "/restorepassword/";

  const getButtonText = () => {
    if (isLoginPage || isRegisterPage || isRestorePasswordPage) {
      return "Log In";
    } else {
      return "Sign Out";
    }
  };

  const handleButtonClick = () => {
    if (isLoginPage || isRegisterPage || isRestorePasswordPage) {
      navigate("/login/");
    } else {
      handleSignOut();
    }
  };

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  return (
    <Section id="navigation">
      <NavBar>
        <Logo />
        <HamburguerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburguerMenu>
        <Menu click={click}>
          <MenuItem>
            <div className="mobile">
              <StyledLink to="/main" onClick={handleButtonClick}>
                {getButtonText()}
              </StyledLink>
            </div>
          </MenuItem>
        </Menu>
        <div className="desktop">
          <StyledLink to="/main" onClick={handleButtonClick}>
            {getButtonText()}
          </StyledLink>
        </div>
      </NavBar>
    </Section>
  );
};

export default SecondaryNavigation;
