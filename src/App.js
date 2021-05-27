import React from 'react'
import Opening from "./components/Opening/Opening.jsx"
import CustomNavbar from "./components/common/CustomNavbar/CustomNavbar.jsx"
import "./App.css"
import Main from './components/Pages/Main/Main.jsx'

function App() {
  return (
    <div>
      {/* <Opening /> */}
      <CustomNavbar />
      <Main />
    </div>
  )
}

export default App
