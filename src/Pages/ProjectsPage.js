import React, { useState } from "react";
import styled from "styled-components";

import projects from "../data/projects";
import MenuProjects from "../Components/MenuProjects";
import ButtonProjects from "../Components/ButtonProjects";

const allButtons = ["ALL", ...new Set(projects.map((item) => item.category))];

function ProjectsPage() {
  const [menuItem, setMenuItems] = useState(projects);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "ALL") {
      setMenuItems(projects);
      return;
    }

    const filteredData = projects.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };
  return (
    <MyProjectsStyled>
      <h1>My Projects</h1>
      <div className="underline"></div>
      <div className="projects-content">
        <ButtonProjects filter={filter} button={button} />
        <MenuProjects menuItem={menuItem} />
      </div>
    </MyProjectsStyled>
  );
}

export default ProjectsPage;

const MyProjectsStyled = styled.section`
  padding: 50px 100px;
  background-color: #191a19;
  width: 100%;
  height: 100%;

  h1 {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 34px;
  }

  .underline {
    border-top: 4px solid #0779e4;
    margin: 0 auto 15px;
    width: 100px;
    font-size: 18px;
  }
`;
