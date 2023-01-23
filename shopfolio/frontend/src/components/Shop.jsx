import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Products from "./Products";
import data from "./Cataloge.json";
import LoginForm from "./LoginForm";

const Shop = () => {
  const [items, setitems] = useState(data);
  const [userInput, setuserInput] = useState("");
  const [filteredData, setfilteredData] = useState("");
  const [shoppingCartItems, setshoppingCartItems] = useState([]);
  const [wishListItems, setwishListItems] = useState([]);
  const [checkOutItems, setcheckOutItems] = useState([]);
  
  const getuserInput = (e) => {
    setuserInput(e.target.value);
    getfilteredData();
  };


const clearFilter = () =>{
  setuserInput("")
  setfilteredData("");
}


  const wordFilter = () => { // wordFilter is used in the searchBar 
    const userInputLetters = userInput.toLocaleLowerCase().trim();
    const userInputLength = userInputLetters.length;
    let newArray = data.filter((item) => {
      const slicedProductName = item.productName.slice(0, userInputLength);
      const slicedCategorieName = item.productCategorie.slice(0,userInputLength);
      return userInput === 
      slicedProductName.toLocaleLowerCase(),
      userInput === slicedCategorieName.toLocaleLowerCase();
    });
    return newArray;
  };

  const userCategory = (e) => {
    let newArray = data.filter((item) => {
     
      return  e.target.innerHTML.toLowerCase() === item.productCategorie.toLowerCase()
      
    });
    setfilteredData(newArray);
    setuserInput("1")
  };

  const getfilteredData = () => {
      let words = wordFilter();
      setfilteredData(words);
  };


  const addItemToCart = (e) => {
    let newArray = [e.target.getAttribute("value"),e.target.getAttribute("price")]
    setshoppingCartItems((oldArray=>[...oldArray,newArray]))
    let newCheckOutCart = data.filter((item)=>{
      return item.productName === e.target.getAttribute("value")
    })

    setcheckOutItems((oldArray) => [...oldArray, newCheckOutCart])
  }

  const removeCartItem = (e) =>{

    let elementRemoved = false;
    let newArray = shoppingCartItems.filter((item)=>{
        if (item[0]===e.target.parentElement.getAttribute("value")){
          if(elementRemoved===false){ return console.log("element removed")}
          elementRemoved = true;
          return item
        }
        return item
    })
    let checkOutUpdated = false;
    let newCheckOutCart = checkOutItems.filter((item)=>{ 
      if (item[0].productName===e.target.parentElement.getAttribute("value")){
        if(checkOutUpdated===false){ return console.log("checkOutelement removed")}
        checkOutUpdated= true;
        return item
      }
      return item
    })
    setcheckOutItems(newCheckOutCart)
    setshoppingCartItems(newArray)
  }


  const newWishItem = (e) => {
    // check if Wishlist already includes the new Wishitem
    if(wishListItems.includes(e.target.parentElement.value) !== true){ 
   setwishListItems((oldArray) => [...oldArray, e.target.parentElement.value])
   e.target.style = "background-color:yellow;"
  } else {
    console.log(wishListItems)
    let newArray = wishListItems.filter((item)=>{
      if (item!==e.target.parentElement.value){return item}
      else 
      e.target.style ="background-color:none"
      console.log("item removed")
    })
    setwishListItems(newArray)
  }
  }
  const removeWish = (e) =>{
    let newArray = wishListItems.filter((item)=>{
      if (item!==e.target.parentElement.getAttribute("value")){return item}
      else 
      console.log("item removed")
    })
    setwishListItems(newArray)
   }

  return (
    <div id="shop">
      <header id="navBar">
        <p id="companyLogo"> Goodys </p>
        <NavBar 
        getUserInput={getuserInput} 
        shoppingCartItems={shoppingCartItems}
        removeCartItem={removeCartItem}
        wishListItems={wishListItems}
        removeWish={removeWish}  
        checkOutItems={checkOutItems}
        />
      </header>
      <SideBar categoryFilter={userCategory}
      clearFilter={clearFilter} />
      <Products
        items={userInput ? filteredData : items}
        addItemToCart={addItemToCart}
        newWishItem={newWishItem}
      />
    </div>
  );
};

export default Shop;
