import React from "react";
import styled from "styled-components";
import NextWeekIcon from "@mui/icons-material/NextWeek";

function Experience() {
  return (
    <ExperienceStyled>
      <div className="study-content">
        <div className="study-cards">
          <div className="study-icon">
            <NextWeekIcon sx={{ fontSize: 45 }} />
          </div>
          <div className="study-text">
            <h3>CoderHouse</h3>
            <p>Tutor of Js, React, Backend</p>
            <p className="date-text">May 2021 - Present</p>
          </div>
        </div>
        <div className="study-cards">
          <div className="study-icon">
            <NextWeekIcon sx={{ fontSize: 45 }} />
          </div>
          <div className="study-text">
            <h3>Web Developer</h3>
            <p>Freelance</p>
            <p className="date-text">Mar 2020 - Nov 2020</p>
          </div>
        </div>
      </div>
    </ExperienceStyled>
  );
}

export default Experience;

const ExperienceStyled = styled.div`
  h3 {
    font-size: 28px;
  }

  p {
    font-size: 24px;
  }
  .study-content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .study-cards {
    background-color: #0779e4;
    width: 100%;
    max-width: 600px;
    padding: 20px;
    display: flex;
    box-shadow: 10px 10px 0px 0px rgba(46, 76, 109, 0.75);
    -webkit-box-shadow: 10px 10px 0px 0px rgba(46, 76, 109, 0.75);
    -moz-box-shadow: 10px 10px 0px 0px rgba(46, 76, 109, 0.75);
    :hover {
      transform: scale(0.95);
      background: linear-gradient(to right, #4d74e6, #2a57dc);
      transition: 0.5s all ease;
      box-shadow: 10px 10px 0px 0px rgba(7, 121, 228, 0.75);
      -webkit-box-shadow: 10px 10px 0px 0px rgba(7, 121, 228, 0.75);
      -moz-box-shadow: 10px 10px 0px 0px rgba(7, 121, 228, 0.75);
  }

  .study-text {
    padding-right: 30px;
  }

  .study-icon {
    margin: 20px;
  }

  .date-text {
    font-size: 18px;
    padding-top: 5px;
  }
`;
