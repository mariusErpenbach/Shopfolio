import React from "react"
const NavBar = (props) =>{
console.log(props)

    return (
        <div id="navBarTop">
        <main>
        <input id="searchBar" onChange={props.getUserInput} ></input>
        <button></button>
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