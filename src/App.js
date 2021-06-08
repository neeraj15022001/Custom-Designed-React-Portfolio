import React from "react";
import Opening from "./components/Opening/Opening.jsx";
import "./App.css";
import Main from "./components/Pages/Main/Main.jsx";
import Projects from "./components/Pages/Projects/Projects.jsx";
import Skills from "./components/Pages/Skills/Skills"

function App() {
  const page = 2;
  return (
    <div>
      {page === 1 ? (
        <Projects />
      ) : (
        <>
          {/* <Opening /> */}
          {/* <Main /> */}
          <Skills />
        </>
      )}
    </div>
  );
}

export default App;
