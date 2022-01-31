import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [checkOutSum, setcheckOutSum] = useState(0);
  const [numberOfItems, setnumberOfItems] = useState(0);
  const [checkOutCart, setcheckOutCart] = useState([]);

  const miniWishList = props.wishListItems.map((item,i)=>(
    <div className="mini-wishBox">{item}</div>
  ))

  useEffect(() => {
    // ShoppingCart Update effect
    if (props.userItems.length != 0) {
      
      let shoppingCart = document.getElementById("shoppingCartNav");
      let checkOut = document.getElementById("shoppingCartHover");
      let minibox = document.createElement("div");
      minibox.className = "mini-productBox";
      minibox.value = props.userItems[0].price;
      minibox.id = props.userItems[0].productName + numberOfItems + "mini";
      shoppingCart.insertBefore(minibox, checkOut);
      // childs
      let miniName = document.createElement("p");
      miniName.textContent = props.userItems[0].productName; // product name
      minibox.appendChild(miniName);
      let removeBtn = document.createElement("button"); // remove button
      removeBtn.addEventListener("click", handleRemoveBtnClick);
      let removeSymbol = document.createElement("i");
      removeSymbol.classList = ["fas fa-times"]; // <i class="fas fa-times"></i>
      removeBtn.appendChild(removeSymbol);
      minibox.appendChild(removeBtn);
      // update states
      setnumberOfItems(
        document.getElementsByClassName("mini-productBox").length
      );
      setcheckOutSum(
        calcSum(document.getElementsByClassName("mini-productBox"))
      );
      setcheckOutCart((oldArray=>[...oldArray,props.userItems]))
    }
  },[props.userItems]);

  const handleRemoveBtnClick = (e) => {
    let parent = document.getElementById(e.target.parentElement.id);
    let grandparent = document.getElementById(parent.parentElement.id);
    grandparent.removeChild(parent);
    // update states
    setnumberOfItems(document.getElementsByClassName("mini-productBox").length);
    setcheckOutSum(calcSum(document.getElementsByClassName("mini-productBox")));
  };

  const calcSum = (elements) => {
    let newSum = 0;
    for (let i = 0; i < elements.length; i++) {
      newSum += elements[i].value;
    }
    return newSum;
  };

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
        <div id="wishlist">
          Wishlist
          {miniWishList}
          <br></br>()
          <div id="wishlistHover">
            <p>full view</p>
          </div>
        </div>
        <div id="shoppingCartNav">
          Shopping Cart
          <br></br>({numberOfItems})
          <div id="shoppingCartHover">
            <p>{checkOutSum}€ total</p>
           <Link to="/checkOut"  state={{ checkOutCart:checkOutCart }}> checkout</Link>
          </div>
        </div>
      </aside>
    </div>
  );
};
export default NavBar;
