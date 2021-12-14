import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Skills from "../Components/Skills";

function AboutMe() {
  return (
    <AboutStyled>
      <section className="About">
        <div className="About-container">
          <h1>About Me</h1>
          <div className="underline"></div>
          {/*  */}
          <div className="About-content">
            <article className="About-text">
              <h2>Who am I?</h2>
              <p>
                Hi! My name is <span className="name">Fernando</span>.
              </p>
              <p>
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{" "}
                I'm a Full-Stack Software Engineer focusing on Front-End
                Development and emerging tech such as AR and Blockchain.
              </p>
              <p>
                <span role="img" aria-label="lightning">
                  ⚡
                </span>{" "}
                You can find me working with JavaScript, React, Redux, Node,
                Express, MongoDB, SQL and PostgreSQL.
              </p>
              <div className="typewriter">
                <p className="typewriter-start">
                  <span role="img" aria-label="lightning">
                    ⚡
                  </span>{" "}
                  I love
                </p>
                <Typewriter
                  options={{
                    strings: [
                      "learning new technologies",
                      "coding with music",
                      "solving complex problems",
                      "reading drinking coffee",
                      "fixing hard-to-fix bugs",
                      "trying new things",
                      "collaborating with others",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <p>.</p>
              </div>
            </article>
            <Skills />
          </div>
        </div>
      </section>
    </AboutStyled>
  );
}

export default AboutMe;

const AboutStyled = styled.div`
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
    font-size: 27px;
    padding: 20px 0;
  }

  p {
    padding: 20px 0;
  }

  .underline {
    border-top: 4px solid #0779e4;
    margin: 0 auto 15px;
    width: 100px;
    font-size: 18px;
  }

  /* Article Section - About Me */

  .About-content {
    display: flex;
    justify-content: space-evenly;
  }
  .About-text {
    font-size: 18px;
    width: 100%;
    max-width: 600px;
  }

  .name {
    color: #0779e4;
    font-weight: bold;
  }

  .typewriter {
    display: flex;
    align-items: center;
  }

  .typewriter-start {
    padding-right: 5px;
  }

  .typewriter > p {
    margin: 0;
  }
`;
