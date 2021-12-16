import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

function NavBar({ navToggle }) {
  return (
    <NavBarStyled>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class" exact>
            My Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" activeClassName="active-class" exact>
            My Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact Me
          </NavLink>
        </li>
      </ul>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  width: 100%;
  height: 3.5rem;
  font-family: "Spartan", sans-serif;
  /* background-color: #2e4c6d; */
  /* background-color: #0779e4; */
  background-color: #111316;
  /* background: linear-gradient(to right, #4d74e6, #2a57dc); */
  display: flex;
  position: sticky;
  z-index: 1;
  @media screen and (max-width: 767px) {
    display: none;
  }

  .nav-item {
    font-size: 14px;
  }
  .nav-items {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding-right: 40px;
    overflow: hidden;
    font-size: 1rem;

    .active-class {
      background-color: #0779e4;
      /* background-color: #0f52ba; */
      /* background: linear-gradient(to right, #4d74e6, #2a57dc); */
      color: white;
      width: 100%;
      border-radius: 0.3rem;
      &:hover {
        /* background-color: #0f52ba; */
        background: linear-gradient(to right, #4d74e6, #2a57dc);
      }
    }
    li {
      a {
        display: flex;
        justify-content: center;
        color: white;
        padding: 0.5rem 1.5rem;
        margin: 0.5rem 0.2rem;
      }
    }
  }
`;

export default NavBar;
