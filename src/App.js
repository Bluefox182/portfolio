import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import AboutMe from "./Pages/AboutMe";
import ResumePage from "./Pages/ResumePage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactMe from "./Pages/ContactMe";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
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
