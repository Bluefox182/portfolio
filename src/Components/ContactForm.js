import React, { useState } from "react";
import styled from "styled-components";

function ContactForm() {
  const [status, setStatus] = useState("Send Message");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <FormStyled>
      <div className="contact-content">
        <h3>Let's work together!</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-field">
            <input type="text" id="name" placeholder="Name" required />
          </div>
          <div className="form-field">
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="form-field">
            <textarea
              name="textarea"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="form-field">
            <button className="button-contact">{status}</button>
          </div>
        </form>
      </div>
    </FormStyled>
  );
}

export default ContactForm;

const FormStyled = styled.form`
  color: white;
  width: 100%;
  max-width: 600px;
  h3 {
    font-size: 28px;
    padding: 30px 0;
  }
  .contact-main {
    display: flex;
    justify-content: space-evenly;
    /* width: 100%; */
  }
  .form {
    color: white;
    border: none;
    .form-field {
      display: flex;
      flex-direction: column;
      margin: 20px auto 0 auto;
      color: white;
      input {
        background: transparent;
        height: 60px;
        outline: none;
        color: white;
        padding: 0 15px;
        border: 2px solid #2e4c6d;
        border-radius: 8px;
        ::placeholder {
          color: #eeeeee;
          opacity: 1; /* Firefox */
          font-size: 16px;
        }
        :focus {
          border: 2px solid #0779e4;
        }
      }
      textarea {
        border: none;
        border: 2px solid #2e4c6d;
        background: transparent;
        outline: none;
        color: #eeeeee;
        width: 100%;
        padding: 0.8rem 1rem;
        font-size: 16px;
        border-radius: 8px;
        ::placeholder {
          color: #eeeeee;
          opacity: 1; /* Firefox */
        }
        :focus {
          border: 2px solid #0779e4;
          border-radius: 8px;
        }
      }
    }
    .button-contact {
      display: flex;
      flex-direction: column;
      margin: 5px auto 0 auto;
      width: 100%;
      max-width: 800px;
      color: white;
      height: 60px;
      border: 2px solid #2e4c6d;
      background: #0779e4;
      font-size: 18px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      cursor: pointer;
      :hover {
        transform: scale(1.05);
        background: linear-gradient(to right, #4d74e6, #2a57dc);
        transition: 0.5s all ease;
      }
    }
  }
`;
