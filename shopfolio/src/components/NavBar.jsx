import React from "react"
const NavBar = (props) =>{


    return (
        <div id="navBarTop">
        <main>
        <input id="searchBar" onChange={props.getUserInput} ></input>
        <button><i className="fas fa-search"></i></button>
        </main>
        <aside>
            <div>Info</div>
            <div>My Account</div>
            <div>Wishlist</div>
            <div>Shopping Cart</div>
        </aside>
        </div>
    )
}
export default NavBar