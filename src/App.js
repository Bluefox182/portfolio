import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
// import { IconButton } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

import HomePage from "./Pages/HomePage";
import AboutMe from "./Pages/AboutMe";
import ResumePage from "./Pages/ResumePage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactMe from "./Pages/ContactMe";
import NavBar from "./Components/NavBar";
import HamburgerMenu from "./Components/HamburgerMenu";

function App() {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <div className="App">
      <NavBar navToggle={navToggle} />

      <HamburgerMenu />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/resume">
          <ResumePage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
