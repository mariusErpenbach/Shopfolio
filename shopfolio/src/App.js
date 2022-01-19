import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
function App() {
  return (
    <div className="App">
    <header id="navBar">
      <p id="companyLogo"> Goodys </p> 
      <NavBar/>
    </header>
    <SideBar/>
    </div>
  );
}

export default App;
