import React, { useRef } from "react";
import styled from "styled-components";
import { skills } from "../data/skills.json";
import { useContainerDimensions } from "../hooks";

const Skills = () => {
  const skillsWrapper = useRef();
  const { width } = useContainerDimensions(skillsWrapper);

  return (
    <SkillsStyled
      style={{ position: "relative", width: "100%", maxWidth: 600 }}
    >
      <h2>Skills</h2>
      <div className="Skills-wrapper">
        <ul className="skills" ref={skillsWrapper}>
          {skills.map((skills) => {
            return (
              <li className="skill-bar-wrapper" key={skills.skillName}>
                <div
                  className="skill-bar"
                  style={
                    skills
                      ? {
                          transition: `${
                            1 + skills.id / 10
                          }s width ease-in-out`,
                          width: width * (skills.amount / 100),
                        }
                      : {
                          width: 1,
                        }
                  }
                ></div>
                <div className="skill-name">{skills.skillName}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </SkillsStyled>
  );
};

export default Skills;

const SkillsStyled = styled.div`
  h2 {
    font-size: 27px;
    padding: 20px 0;
    text-align: center;
  }
  .Skills-wrapper {
    position: relative;
    width: 100%;
    max-width: 600px;
    text-align: center;
    padding: 20px 0;
  }

  .skills {
    position: relative;
    padding-left: 0;
    list-style: none;
    font-size: 3rem;
    margin: 0 auto;
    width: 100%;
  }

  .skill-bar-wrapper {
    overflow: hidden;
    position: relative;
    display: flex;
    background-color: #3e4555;
    border-radius: 2px;
    height: 30px;
    margin-bottom: 10px;
  }
  .skill-bar {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    height: 30px;
    background-color: #0779e4;
    border-radius: 2px 0px 0px 2px;
  }

  .skill-name {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px 0px 0px 2px;
    left: 0;
    width: 80px;
    height: 30px;
    font-size: 12px;
    background: linear-gradient(to right, #4d74e6, #2a57dc);
    font-weight: 600;
    color: white;
  }
`;
