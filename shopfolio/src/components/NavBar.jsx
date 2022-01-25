import React from "react";
import { Link } from "react-router-dom";
const NavBar = (props) => {
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
          <div id="shoppingCartHover">checkout</div>
          </div>
     
      </aside>
    </div>
  );
};
export default NavBar;
