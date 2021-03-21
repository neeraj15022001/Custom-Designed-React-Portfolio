import React from "react";
import Main from "./components/Pages/Main/Main.jsx";
import About from "./components/Pages/About/About.jsx";
import Projects from "./components/Pages/Projects/Projects.jsx";
import Skills from "./components/Pages/Skills/Skills.jsx";
import Explore from "./components/Pages/Projects/Explore/Explore.jsx";
import Opening from "./components/Opening/Opening.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Opening />
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path="/projects/explore">
            <Explore />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;
