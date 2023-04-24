import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Products from "./Products";
import WelcomeBanner from "./WelcomeBanner"


const Shop = () => {
 
  const [userInput, setuserInput] = useState("");
  const [filteredData, setfilteredData] = useState("");
  const [shoppingCartItems, setshoppingCartItems] = useState([]);
  const [wishListItems, setwishListItems] = useState([]);
  const [checkOutItems, setcheckOutItems] = useState([]);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    }
    fetchData();
  }, []);

  const getuserInput = (e) => {
    console.log(userInput)
    setuserInput(e.target.value);
    getfilteredData();
  };

  const getfilteredData = () => {
    let words = wordFilter();
    setfilteredData(words);
};

const clearFilter = () =>{
  setuserInput("")
  setfilteredData("");
}
const wordFilter = () => {
  const userInputLetters = userInput.toLocaleLowerCase().trim();
  let newArray = products.filter((item) => {
    return (
      item.productName.toLocaleLowerCase().includes(userInputLetters) ||
      item.productCategorie.toLocaleLowerCase().includes(userInputLetters)
    );
  });
  return newArray;
};


  const userCategory = (e) => {
    let newArray = products.filter((item) => {
     
      return  e.target.innerHTML.toLowerCase() === item.productCategorie.toLowerCase()
      
    });
    setfilteredData(newArray);
    setuserInput("1")
  };
  const addItemToCart = (e) => {
    let newArray = [e.target.getAttribute("value"),e.target.getAttribute("price")]
    setshoppingCartItems((oldArray=>[...oldArray,newArray]))
    let newCheckOutCart = products.filter((item)=>{
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
      <main>
       <WelcomeBanner></WelcomeBanner>
      <SideBar
       categoryFilter={userCategory}
      clearFilter={clearFilter} />
    
      <Products
        items={userInput ? filteredData : products}
        addItemToCart={addItemToCart}
        newWishItem={newWishItem}
      />
       
      </main>
      <footer>
   
      </footer>
    </div>
  );
};

export default Shop;
