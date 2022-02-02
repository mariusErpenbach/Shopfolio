import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {

  const [numberOfItems, setnumberOfItems] = useState(0);
  const [checkOutCart, setcheckOutCart] = useState([]);
  const [checkOutSum, setcheckOutSum] = useState(0);


  const miniWishList = props.wishListItems.map((item,i)=>(
    <div className="mini-wishBox" key={i} value={item} >{item}
    <button onClick={props.removeWish}>
    <i className="fas fa-times" ></i>
    </button></div>
  ))
console.log(props.shoppingCartItems)
  const miniCartList = props.shoppingCartItems.map((item,i)=>(
    <div className="mini-productBox" key={i} value={item[0]}>{item}
    <button onClick={props.removeCartItem}>
    <i className="fas fa-times" ></i>
    </button></div>
  ))

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
          
          <br></br>({props.wishListItems ? props.wishListItems.length:0})
          <div id="wishlistHover">
          {miniWishList}
            <p>full view</p>
          </div>
        </div>
        <div id="shoppingCartNav">
          Shopping Cart
          <br></br>({numberOfItems})
          <div id="shoppingCartHover">
            <p>{checkOutSum}€ total</p>
            {miniCartList}
           <Link to="/checkOut"  state={{ checkOutCart:checkOutCart }}> checkout</Link>
          </div>
        </div>
      </aside>
    </div>
  );
};
export default NavBar;
