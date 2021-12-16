import React from "react";
import styled from "styled-components";
import Studies from "../Components/Studies";
import Experience from "../Components/Experience";

function ResumePage() {
  return (
    <ResumeStyled>
      <div className="Resume-container">
        <h1>Resume</h1>
        <div className="underline"></div>
        <div className="Resume-content">
          <h2>My Awesome Story</h2>
          <div className="Resume-items">
            <Studies />
            <Experience />
          </div>
        </div>
      </div>
    </ResumeStyled>
  );
}

export default ResumePage;

const ResumeStyled = styled.div`
  padding: 20px 0;
  background-color: #191a19;
  width: 100%;
  height: calc(100vh - 56px);
  margin: 0;
  padding: 20px 0;

  h1 {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 34px;
  }

  h2 {
    padding-left: 80px;
  }

  .underline {
    border-top: 4px solid #0779e4;
    margin: 0 auto 15px;
    width: 100px;
    font-size: 18px;
  }

  .Resume-items {
    display: flex;
    justify-content: space-evenly;
    padding-top: 40px;
    @media screen and (max-width: 376px) {
      padding-left: 40px;
      <padding-right></padding-right>: 40px;
    }
  }

  /* Responsive */

  @media screen and (max-width: 960px) {
    .Resume-items {
      flex-direction: column;
      align-items: center;
      gap: 90px;
      padding: 40px 0;
    }
  }
  @media screen and (max-width: 400px) {
    h2 {
      font-size: 28px;
      padding: 0;
      text-align: center;
    }
  }
`;
