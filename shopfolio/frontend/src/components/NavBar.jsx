import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NavBar = (props) => {
  const navigate = useNavigate();

  const Logout = async () => {
    try {
        await axios.delete('http://localhost:5000/logout');
        navigate.push("/");
    } catch (error) {
        console.log(error);
    }
}


const loginPopUp = () => {
    let element = document.querySelector("#loginForm")
    if(element.style.display != "flex")
    element.style.display = "flex";
    else {
      element.style.display = "none";
    }
}



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
      <aside id="navBarTopRight">
        
          <div className="navBarButton"><Link to="/info" >Info </Link></div>

          <div className="navBarButton" id="myAccount"><p onClick={loginPopUp}>my<br/> Account</p>
          <br/>
          <LoginForm/>
          
          </div>
          <div className="navBarButton" id="wishlist">
          Wishlist
          <br/>
          ({props.wishListItems ? props.wishListItems.length:0})
          <div id="wishlistHover">
          {miniWishList}
            <p>full view</p>
          </div>
        </div>
        <div className="navBarButton" id="shoppingCartNav" >
          Shopping Cart
          <br></br>({props.shoppingCartItems ? props.shoppingCartItems.length:0})
          <div id="shoppingCartHover">
            <p>{totalSum}€ total</p>
            {miniCartList}
            <Link to="/checkOut"
                state={{checkOutItems:props.checkOutItems}}>
                checkout
                </Link>
          </div>
        </div>
        <button onClick={Logout}>Log Out</button>
      </aside>
    </div>
  );
};
export default NavBar;
