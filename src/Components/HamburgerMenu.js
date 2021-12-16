import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuLabel = styled.label`
  background-color: #4d74e6;
  position: fixed;
  top: 2rem;
  right: 2rem;
  /* top: 6rem; */
  /* right: 6rem; */
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  /* height: 7rem;
  width: 7rem; */
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavBackground = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  /* top: 6.5rem;
  right: 6.5rem; */
  background-image: #4d74e6
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 2.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 3rem;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 4rem; // test
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  background-color: #2e4c6d;
  opacity: 0.9;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 300;
  text-decoration: none;
  color: #eeeeee;
  padding: 0.5rem 1.5rem;
  width: 100%;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #4d74e6 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: #2a57dc
    transform: translateX(1rem);
  }
`;

function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Home
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/about">
              About Me
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/resume">
              My Resume
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/projects">
              My Projects
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/contact">
              Contact Me
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
}

export default HamburgerMenu;
