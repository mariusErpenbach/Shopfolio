import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
const NavBar = (props) => {

const [checkOutSum, setcheckOutSum] = useState(0);
const [numberOfItems,setnumberOfItems] = useState(0);

const handleRemoveBtnClick = (e) =>{
  console.log(e.target)
}

  useEffect(() => { // ShoppingCart Update effect
  if (props.userItems.length!=0){
  let shoppingCart = document.getElementById("shoppingCartNav")
  let checkOut = document.getElementById("shoppingCartHover")
  let minibox = document.createElement("div")
  minibox.className = "mini-productBox"
  minibox.id = props.userItems[0].productName + numberOfItems + "mini"
  shoppingCart.insertBefore(minibox,checkOut)

  // childs 
  let miniName = document.createElement("p");
  miniName.textContent = props.userItems[0].productName
  minibox.appendChild(miniName)
  let removeBtn = document.createElement("button")
  removeBtn.addEventListener("click",handleRemoveBtnClick)

  // <i class="fas fa-times"></i>
  minibox.appendChild(removeBtn)
  // update states
  setcheckOutSum(checkOutSum+props.userItems[0].price)
  setnumberOfItems(numberOfItems+1)
}
  },[props.userItems]);
  


  return (
    <div id="navBarTop">
      <main>
        <input id="searchBar" onChange={props.getUserInput}></input>
        <button>
          <i className="fas fa-search"></i>
      
        </button>
      </main>
      <aside>
        <Link to="/info">
          <div>Info</div>
        </Link>
        <Link to="/myAccount">
          
          <div>My Account</div>
        </Link>
        <Link to="/wishlist">
 
          <div>Wishlist</div>
        </Link>
        
      
          <div id="shoppingCartNav">Shopping Cart 
          <br></br>({numberOfItems})
          <div id="shoppingCartHover">
          <p>{checkOutSum}€ total</p>
          <p>checkout</p></div>
          </div>
     
      </aside>
    </div>
  );
};
export default NavBar;
