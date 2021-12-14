import React from "react";
import styled from "styled-components";
import ContactForm from "../Components/ContactForm";
import ContactCard from "../Components/ContactCard";

function ContactMe() {
  return (
    <ContactMeStyled>
      <h1>Contact Me</h1>
      <div className="underline"></div>
      <div className="MyContact-content">
        <ContactForm />
        <ContactCard />
      </div>
    </ContactMeStyled>
  );
}

export default ContactMe;

const ContactMeStyled = styled.div`
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

  .underline {
    border-top: 4px solid #0779e4;
    margin: 0 auto 15px;
    width: 100px;
    font-size: 18px;
  }

  .MyContact-content {
    display: flex;
    justify-content: space-evenly;
  }
`;
