import React from "react";
import { useLocation } from "react-router-dom";
const CheckOut =() => {

    let data = useLocation()



    const showUserCart = data.state.checkOutCart.map((item,i)=>(
        <div >{item[0].price}€ - {item[0].productName}</div>
    ))
    
    
    return(
        <div id="CheckOut">
        <h1>Your Cart</h1>
        <div>{showUserCart}</div>

        <button>buy now</button>
        </div>
    )
}

export default CheckOut