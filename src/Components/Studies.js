import React from "react";
import styled from "styled-components";
import SchoolIcon from "@mui/icons-material/School";

function Studies() {
  return (
    <StudiesStyled>
      <div className="study-content">
        <div className="study-cards">
          <div className="study-icon">
            <SchoolIcon sx={{ fontSize: 45 }} />
          </div>
          <div className="study-text">
            <h3>Full-Stack Engineer</h3>
            <p>CodeCademy</p>
            <p className="date-text">Aug 2021 - Nov 2021</p>
          </div>
        </div>
        <div className="study-cards">
          <div className="study-icon">
            <SchoolIcon sx={{ fontSize: 45 }} />
          </div>
          <div className="study-text">
            <h3>Front-End Engineer</h3>
            <p>CodeCademy</p>
            <p className="date-text">May 2021 - Aug 2021</p>
          </div>
        </div>
        <div className="study-cards">
          <div className="study-icon">
            <SchoolIcon sx={{ fontSize: 45 }} />
          </div>
          <div className="study-text">
            <h3>Front-End Development</h3>
            <p>PLATZI</p>
            <p className="date-text">Dec 2020 - May 2021</p>
          </div>
        </div>
      </div>
    </StudiesStyled>
  );
}

export default Studies;

const StudiesStyled = styled.div`
  @media screen and (max-width: 400px) {
    .study-cards {
      width: 100%;
      max-width: 400px;
    }
  }

  h3 {
    font-size: 28px;
    @media screen and (max-width: 400px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 24px;
    @media screen and (max-width: 400px) {
      font-size: 18px;
    }
  }
  .study-content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media screen and (max-width: 400px) {
      padding: 0 30px;
    }
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
    @media screen and (max-width: 400px) {
      padding: 10px 0;
    }
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
    @media screen and (max-width: 400px) {
      font-size: 16px;
    }
  }
`;
