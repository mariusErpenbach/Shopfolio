import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
const LoginForm = () => {

  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
 
  const Auth = async (e) => {
    e.preventDefault();
    try {
      // we post email and password to the login backend.
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      window.open("/","_self")
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <form id="loginForm" onSubmit={Auth}>
      <p>{msg}</p>
      <div >
        <label >Email or Username</label>
        <div>
          <input
            type="text"
            className="input"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="label">Password</label>
        <div>
          <input
            type="password"
            className="input"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button>Login</button>
      </div>
      <Link to="/accountRegister">register</Link>
    </form>
  );
};

export default LoginForm;
