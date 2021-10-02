import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import Zoom from 'react-reveal/Zoom';
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <Nav scrollNav={scrollNav}>
      <Zoom>
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars className="icon" />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about" offset={-70}>About me</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="resume" offset={-70}>Resume</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="skills" offset={-70}>Skills</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="portfolio" offset={-70}>Portfolio</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact" offset={-70}>Contact</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
      </Zoom>
    </Nav>
  );
};

// Styles ***************************
const Nav = styled.nav`
  background-color: ${({ scrollNav }) => scrollNav ? "#ffffffa7" : "transparent"};
  backdrop-filter: ${({ scrollNav }) => (scrollNav ? "blur(10px)" : "none")};
  box-shadow: ${({ scrollNav }) => scrollNav ? " 1px 2px 5px 3px rgba(202, 197, 197, 0.571)" : "none"};
  height: 500px;
  height: 70px;
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;
const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: -18px;
    right: 0;
    transform: translate(-100%, 65%);
    font-size: 2rem;
    color: #263238;
    cursor: pointer;
  }
  .icon {
    font-size: 30px;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  margin: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;
const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(LinkS)`
  color: #263238 !important;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 550;
  padding: 0 1rem;
  height: 100%;
  letter-spacing: 1px;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid green;
  }
`;
export default Navbar;

