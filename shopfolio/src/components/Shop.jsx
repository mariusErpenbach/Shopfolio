import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Products from "./Products";
import data from "./Cataloge.json";

const Shop = () => {
  const [items, setitems] = useState(data);
  const [userInput, setuserInput] = useState("");
  const [filteredData, setfilteredData] = useState([]);
  const [shoppingCartItems, setshoppingCartItems] = useState([]);
  const [wishListItems, setwishListItems] = useState([]);
  const getuserInput = (e) => {
    setuserInput(e.target.value);
    getfilteredData("words");
  };

  const wordFilter = () => {
    const userInputLetters = userInput.toLocaleLowerCase().trim();
    const userInputLength = userInputLetters.length;
    let newArray = data.filter((item) => {
      const slicedProductName = item.productName.slice(0, userInputLength);
      if (userInput === slicedProductName.toLocaleLowerCase()) {
        return item.productName;
      } else return console.log("filter is empty");
    });
    return newArray;
  };

  const userCategory = (e) => {
    let newArray = data.filter((item) => {
      if (
        e.target.innerHTML.toLowerCase() === item.productCategorie.toLowerCase()
      ) {
        return item.productName;
      } else return console.log("no filter");
    });
    setfilteredData(newArray);
    setuserInput(`${newArray}`);
  };

  const getfilteredData = (filter) => {
    if (filter === "words") {
      let words = wordFilter();
      setfilteredData(words);
    } else console.log("nothing found with getFilteredData")
  };


  const addItemToCart = (e) => {
    let newArray = [e.target.getAttribute("value"),e.target.getAttribute("price")]
    setshoppingCartItems((oldArray=>[...oldArray,newArray]))
    console.log(shoppingCartItems)
    // setshoppingCartItems((oldArray)=>[...oldArray,e.target])
  }
  const removeCartItem = (e) =>{
    let elementRemoved = false;
    let newArray = shoppingCartItems.filter((item)=>{
        if (item[0]==e.target.parentElement.getAttribute("value")){
          if(elementRemoved===false){ return console.log("element removed")}
          elementRemoved = true;
          return item
        }
        return item
    })
    setshoppingCartItems(newArray)
  }


  const newWishItem = (e) => {
    // check if Wishlist already includes the new Wishitem
    if(wishListItems.includes(e.target.parentElement.value) != true){ 
   setwishListItems((oldArray) => [...oldArray, e.target.parentElement.value])
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

        />
      </header>
      <SideBar categoryFilter={userCategory} />
      <Products
        items={userInput ? filteredData : items}
        addItemToCart={addItemToCart}
        newWishItem={newWishItem}
      />
    </div>
  );
};

export default Shop;
