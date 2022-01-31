import React from "react";
import { useLocation } from "react-router-dom";
const CheckOut =() => {

    let data = useLocation()
const tryit = () => {
  
    console.log(data.state)}
    return(
        <div id="CheckOut">
        hi kids
        <button onClick={tryit}>tryy</button>
        </div>
    )
}

export default CheckOut