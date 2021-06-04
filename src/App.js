import React from "react";
import Opening from "./components/Opening/Opening.jsx";
import CustomNavbar from "./components/common/CustomNavbar/CustomNavbar.jsx";
import "./App.css";
import Main from "./components/Pages/Main/Main.jsx";
import Projects from "./components/Pages/Projects/Projects.jsx";

function App() {
  const page = 1;
  return (
    <div>
      {page === 1 ? (
        <Projects />
      ) : (
        <>
          {/* <Opening /> */}
          <CustomNavbar colorClass="text-theme" />
          <Main />
        </>
      )}
    </div>
  );
}

export default App;
