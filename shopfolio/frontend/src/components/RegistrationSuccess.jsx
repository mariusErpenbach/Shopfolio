import React from "react";
import { Link } from "react-router-dom";


const RegistrationSuccess = (props) => {
    return(
    <div id="registrationSuccuess">
    <p>Hello, your account was successful registrated.</p>
    <button><Link to="/">continue shopping</Link></button>
    </div>
    )
}


export default RegistrationSuccess