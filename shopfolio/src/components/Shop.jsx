import React,{useState} from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Products from "./Products";
import data from "./Cataloge.json";


const Shop = () => {
    const [items, setitems] = useState(data);
    const [userInput, setuserInput] = useState("");
    const [filteredData, setfilteredData] = useState([]);
    const [shoppingCartItems, setshoppingCartItems] = useState("");
    const [wishListItem, setwishListItem] = useState("");

    const getuserInput = (e) =>{
      setuserInput(e.target.value)
      getfilteredData("words");
      }
    
    const wordFilter = () => {
      const userInputLetters = userInput.toLocaleLowerCase().trim(); 
      const userInputLength = userInputLetters.length;
      let newArray = data.filter((item)=>{
        const slicedProductName = item.productName.slice(0,userInputLength);
        if (userInput === slicedProductName.toLocaleLowerCase()){
          return item.productName
        } 
       else return (console.log("filter is empty"))
      })
      return newArray
    }
    
    const userCategory =(e)=>{
      let newArray = data.filter((item)=>{
        if (e.target.innerHTML.toLowerCase() === item.productCategorie.toLowerCase()){
          return item.productName
        }else return console.log("no filter")
      })
    setfilteredData(newArray)
    setuserInput(`${newArray}`)
    }
    
    
    const getfilteredData = (filter) =>{
      if (filter==="words"){
       let words = wordFilter();
       setfilteredData(words)}
     }

     const addItemToCart = (itemName) =>{
         let newItem = data.filter((item)=>{
            if (itemName===item.productName){
                return item
            }
         })
         setshoppingCartItems(newItem)
     }

     const getshoppingCartItem = (e) =>{
      addItemToCart(e.target.value)    
     }

     const addItemToWishList =(itemName) =>{
      let newItem = data.filter((item)=>{
        if (itemName===item.productName){
            return item
        }
     })
       setwishListItem(newItem)
     }

     const getWishlListItem = (e) =>{
       addItemToWishList(e.target.parentElement.value)
      // highlight clicked star and make it not clickable again
      e.target.style += "background-color:yellow;" 
   
      e.target.id= e.target.parentElement.value +"highlight"
      console.log(e.target)
     }


     return(<div id="shop">
        <header id="navBar">
        <p id="companyLogo"> Goodys </p> 
        <NavBar getUserInput={getuserInput}
                userItems={shoppingCartItems}
                userWishes={wishListItem}        />
      </header>
      <SideBar categoryFilter={userCategory}/>
      <Products items={ userInput ? filteredData : items}
                addToCart={getshoppingCartItem}
                addToWishList={getWishlListItem}
      />
      </div>
     )
}

export default Shop