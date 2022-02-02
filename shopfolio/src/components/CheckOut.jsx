import React from "react";
import { useLocation } from "react-router-dom";
const CheckOut =() => {

    let data = useLocation()



    const showUserCart = data.state.checkOutItems.map((item,i)=>(
    <div className="checkout-productBox" key={item[0].productName+i}>
    <header>
    <img className="checkout-productImg" src={item[0].img} alt={"picture of "+item[0].productName}></img>
    </header>
    <aside>
    <p className="checkout-productBoxName">{item[0].productName}</p>
    <div className="checkout-productPrice">{item[0].price}€</div>
    </aside>
    <footer>
        <button>X</button>
    </footer>
    </div>
    ))
    
    const totalCheckOutSum = data.state.checkOutItems.reduce(
        (acc, curr) => acc + parseInt(curr[0].price),0
    )
    
    return(
        <div id="CheckOut">
        <div id="showUserCart"><h1>Your Cart</h1>{showUserCart}</div>
        <div id="totalCheckOutSum">{totalCheckOutSum}€</div>
        <button id="buyButton">buy now</button>
        </div>
    )
}

export default CheckOut