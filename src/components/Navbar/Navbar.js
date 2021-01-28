import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon
} from "./Navbar.elements";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = setClick(!click);
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon></NavIcon>
            ULTRA
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
