import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" offset={-70} onClick={toggle}>
              About me
            </SidebarLink>
            <SidebarLink to="resume" offset={-70} onClick={toggle}>
              Resume
            </SidebarLink>
            <SidebarLink to="skills" offset={-70} onClick={toggle}>
              Skills
            </SidebarLink>
            <SidebarLink to="portfolio" offset={-70} onClick={toggle}>
              Portfolio
            </SidebarLink>
            <SidebarLink to="contact" offset={-70} onClick={toggle}>
              Contact
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

// Styles ***************************
const SidebarContainer = styled.aside`
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #ffffffa7;
  backdrop-filter: blur(10px);
  box-shadow: 1px 2px 5px 3px rgba(202, 197, 197, 0.571);
  width: 100%;
  height: 100%;
  z-index: 999;
  transition: all 0.3s ease-in-out;
  /* opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")}; */
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  color: #174447;
  font-size: 40px;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SidebarLink = styled(LinkS)`
  font-weight: bold;
  color: #174447 !important;
  text-decoration: none;
  list-style: none;
  font-size: 1.5rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: green;
  }
`;
export default Sidebar;
