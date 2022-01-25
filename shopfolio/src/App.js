import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Shop from "./components/Shop";
import Info from "./components/Info";
import MyAccount from "./components/MyAccount";
import Wishlist from "./components/Wishlist";
function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path="/" element={<Shop/>}> </Route>
    <Route path="/info" element={<Info/>}> </Route>
    <Route path="/myAccount" element={<MyAccount/>}></Route>
    <Route path="/Wishlist" element ={<Wishlist/>}></Route>
    </Routes>
    </Router>
    </div>

  );
}

export default App;
