import React,{useState} from "react";
import { Link } from "react-router-dom";
const LoginForm = () => {

    const [userNameReg, setuserNameLog] = useState("")
    const [passwordReg, setpasswordLog] = useState("")

    return(<div id="loginForm">
    <h3>sign up</h3>
    <input 
    onChange= {(e)=>{setuserNameLog(e.target.value)}}
    type="text" 
    placeholder="user name">
    </input>
    <input 
     onChange= {(e)=>{setpasswordLog(e.target.value)}}
    type="text" 
    placeholder="password"> 
    </input>
    <button>
    Save</button>

    <div className="registerLink"><Link to="/accountRegister">test</Link></div>

    </div>)
}

export default LoginForm