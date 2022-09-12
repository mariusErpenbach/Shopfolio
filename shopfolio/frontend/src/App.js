import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Shop from "./components/Shop";
import Info from "./components/Info";
import MyAccount from "./components/MyAccount";
import CheckOut from "./components/CheckOut";
import RegisterForm from "./components/RegisterForm";
import RegistrationSuccess from "./components/RegistrationSuccess";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path="/" element={<Shop/>}> </Route>
    <Route path="/info" element={<Info/>}> </Route>
    <Route path="/myAccount" element={<MyAccount/>}> </Route>
    <Route path="/checkOut" element={<CheckOut/>}> </Route>
    <Route path="/accountRegister" element={<RegisterForm/>}></Route>
    <Route path="/registrationSuccess" element={<RegistrationSuccess/>}></Route>
    <Route path="/login" element={<LoginForm/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </Router>
    </div>

  );
}

export default App;
