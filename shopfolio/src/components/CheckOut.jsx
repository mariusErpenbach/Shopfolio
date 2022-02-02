import React,{useState} from "react";
import { useLocation } from "react-router-dom";
const CheckOut =(props) => {

    let data = useLocation()
const [displayData, setdisplayData] = useState(data.state.checkOutItems);
    const removeFromCheckOut = (e) =>{
    console.log(e.target.parentElement.getAttribute("value"))
    // e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement)
    let itemRemoved = false

    let newArray = displayData.filter((item)=>{
        if(item[0].productName==e.target.parentElement.getAttribute("value")){
            if(itemRemoved==false) {return console.log(`${item[0].productName} got removed`)}
            itemRemoved = true;
            return item
        }
        return item
    })
    setdisplayData(newArray)
    
}

    const showUserCart = displayData.map((item,i)=>(
    <div className="checkout-productBox" key={item[0].productName+i}>
    <header>
    <img className="checkout-productImg" src={item[0].img} alt={"picture of "+item[0].productName}></img>
    </header>
    <aside>
    <p className="checkout-productBoxName">{item[0].productName}</p>
    <div className="checkout-productPrice">{item[0].price}€</div>
    </aside>
    <footer value={item[0].productName}>
        <button onClick={removeFromCheckOut}>X</button>
    </footer>
    </div>
    ))
    
   const totalCheckOutSum = displayData.reduce(
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