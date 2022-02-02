import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {

  



  const miniWishList = props.wishListItems.map((item,i)=>(
    <div className="mini-wishBox" key={i} value={item} >{item}
    <button onClick={props.removeWish}>
    <i className="fas fa-times" ></i>
    </button></div>
  ))

  const miniCartList = props.shoppingCartItems.map((item,i)=>(
    <div className="mini-productBox" key={i} value={item[0]}>{item}
    <button onClick={props.removeCartItem}>
    <i className="fas fa-times" ></i>
    </button></div>
  ))

const totalSum = props.shoppingCartItems.reduce(
  ( accumulator, currentValue ) => accumulator + parseInt(currentValue[1]),
  0
);


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
          <br></br>({props.shoppingCartItems ? props.shoppingCartItems.length:0})
          <div id="shoppingCartHover">
            <p>{totalSum}€ total</p>
            {miniCartList}
           <Link to="/checkOut"  state={{ checkOutItems:props.checkOutItems}}> checkout</Link>
          </div>
        </div>
      </aside>
    </div>
  );
};
export default NavBar;
