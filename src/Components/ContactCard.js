import React from "react";
import styled from "styled-components";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

function ContactCard() {
  return (
    <RightCards>
      <div className="cards">
        <div className="card-content">
          <div className="card-items">
            <div className="card-icon">
              <LocationOnIcon sx={{ fontSize: 50 }} />
            </div>
            <div className="card-text">
              <h5>Location</h5>
              <p>Lima,Peru</p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="card-items">
            <div className="card-icon">
              <EmailIcon sx={{ fontSize: 50 }} />
            </div>
            <div className="card-text">
              <h5>Email</h5>
              <p>fergaldoss@gmail.com</p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </RightCards>
  );
}

export default ContactCard;

const RightCards = styled.div`
  .cards {
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    @media screen and (max-width: 960px) {
      padding-top: 40px;
      padding-bottom: 60px;
      gap: 40px;
    }
  }
  .card-items {
    width: 300px;
    background-color: #0779e4;
    padding: 20px 30px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
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
  }

  .card-icon {
    display: flex;
    justify-content: flex-start;
    padding-right: 15px;
  }
  h5 {
    font-size: 18px;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
  }
`;
