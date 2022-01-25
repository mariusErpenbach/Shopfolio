import React from "react";
import { Link } from "react-router-dom";
const Info = () => {

    return(
    <div id="info">
    <p>This is an imaginary shop to improve my coding skills.</p>
    <Link to="/">
    <p>back to start</p>
    </Link>
    </div>
)
}

export default Info;