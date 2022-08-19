import React from "react";
import { Link } from "react-router-dom";
const MyAccount = () => {

    return(
    <div id="myAccount">
    <p>This is an imaginary shop to improve my coding skills.</p>
    <Link to="/">
    <p>back to start</p>
    </Link>
    </div>
)
}

export default MyAccount;