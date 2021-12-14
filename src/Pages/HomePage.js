import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particle";
import avatar from "../img/avatar.png";

import Typewriter from "typewriter-effect";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particles-con">
        <Particle className="particles" />
      </div>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <h1 className="hero-text">
        Hi, I'm <span className="name">Fernando Galdos</span>.{" "}
        {/* <span className="wave-emoji" role="img" aria-label="waving hand">
          👋
        </span> */}
      </h1>
      <p className="title-text">
        | Full-Stack Engineer | JavaScript | React | Node | Express | MongoDB |{" "}
      </p>
      <h1 className="hero-text2">
        <Typewriter
          options={{
            strings: [
              "I love learning new tech.",
              "I create unique digital experiences.",
              "I like to design things.",
              "I love meeting new people.",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 8,
            cursor: "<",
            delay: 100,
          }}
        />
      </h1>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/fernandogaldos/"
          className="icon i-linkedin"
        >
          <LinkedInIcon sx={{ fontSize: 50 }} />
        </a>
        <a href="https://github.com/Bluefox182" className="icon i-github">
          <GitHubIcon sx={{ fontSize: 40 }} />
        </a>
        <a href="https://twitter.com/bluefox182" className="icon i-twitter">
          <TwitterIcon sx={{ fontSize: 45 }} />
        </a>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: calc(100vh - 100px);
  z-index: 0;

  .avatar {
    width: 10rem;
    text-align: center;
    padding: 1rem 0;
    z-index: 10;
    img {
      width: 100%;
      border-radius: 50%;
      background: #4d74e6;
      background-size: cover;
      background-position: center;
      border: 5px solid transparent;
    }
  }

  .name {
    font-size: 36px;
    /* color: #3db2ff; */
    /* color: #3edbf0; */
    color: #0779e4;
    z-index: 10;
  }
  .hero-text {
    font-size: 36px;
    z-index: 10;
    letter-spacing: 1px;
  }

  .title-text {
    font-size: 18px;
    text-align: center;
    z-index: 10;
    letter-spacing: 1px;
  }

  .hero-text2 {
    margin-top: 20px;
    font-size: 36px;
    z-index: 10;
    letter-spacing: 1px;
  }

  .icons {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    .icon {
      padding: 0 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s ease-in-out;
      cursor: pointer;
      color: white;
      &:hover {
        color: #0779e4;
      }
    }
  }
  @media screen and (max-width: 960px) {
    .hero-text,
    .hero-text2,
    .name {
      font-size: 24px;
    }

    .title-text {
      font-size: 14px;
    }
  }
`;
export default HomePage;
