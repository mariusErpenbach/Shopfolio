import React from "react";

const LoginForm = () => {
    return(<div id="loginForm">
    
    <p>Email Address </p><input type="text" placeholder="email@example.com" ></input>
    <p>Password </p> <input type="password" placeholder="password"></input>
   
    <div id="loginFormOptionBox">
    <button id="loginButton"> login</button>
    <aside>
    <button>Register new account</button>
    <button>forgot password</button>
    </aside>
  
    </div>
    
   
    </div>)
}

export default LoginForm