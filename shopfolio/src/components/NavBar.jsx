import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {

const [checkOutSum, setcheckOutSum] = useState(0);
const [numberOfItems,setnumberOfItems] = useState(0);
const [numberOfWishes, setnumberOfWishes]=useState(0);

useEffect(() => {
 if (props.userWishes.length!=0){
  let wishlist = document.getElementById("wishlist")
  let checkOut = document.getElementById("wishlistHover")
  let miniwishbox = document.createElement("div")
  miniwishbox.className = "mini-wishBox"
  miniwishbox.value = props.userWishes[0].price
  miniwishbox.id = props.userWishes[0].productName + numberOfWishes + "miniwish"
  wishlist.insertBefore(miniwishbox,checkOut)
  //children
  let miniName = document.createElement("p");
  miniName.textContent = props.userWishes[0].productName // product name
  miniwishbox.appendChild(miniName)
  let removeBtn = document.createElement("button") // remove button
  removeBtn.addEventListener("click",handleRemoveBtnClick)
  let removeSymbol = document.createElement("i")
  removeSymbol.className = "fas fa-times"; // <i class="fas fa-times"></i>
  removeBtn.appendChild(removeSymbol)
  miniwishbox.appendChild(removeBtn)
   // update states
   setnumberOfWishes(document.getElementsByClassName("mini-wishBox").length)
 }
}, [props.userWishes]);


  useEffect(() => { // ShoppingCart Update effect
  if (props.userItems.length!=0){
  let shoppingCart = document.getElementById("shoppingCartNav")
  let checkOut = document.getElementById("shoppingCartHover")
  let minibox = document.createElement("div")
  minibox.className = "mini-productBox"
  minibox.value = props.userItems[0].price
  minibox.id = props.userItems[0].productName + numberOfItems + "mini"
  shoppingCart.insertBefore(minibox,checkOut)

  // childs 
  let miniName = document.createElement("p");
  miniName.textContent = props.userItems[0].productName // product name
  minibox.appendChild(miniName)
  let removeBtn = document.createElement("button") // remove button
  removeBtn.addEventListener("click",handleRemoveBtnClick)
  let removeSymbol = document.createElement("i")
  removeSymbol.className = "fas fa-times"; // <i class="fas fa-times"></i>
  removeBtn.appendChild(removeSymbol)
  minibox.appendChild(removeBtn)
   // update states
  setnumberOfItems(document.getElementsByClassName("mini-productBox").length)
  setcheckOutSum(calcSum(document.getElementsByClassName("mini-productBox")))
  setnumberOfWishes(document.getElementsByClassName("mini-wishBox").length)
}
  },[props.userItems]);


  const handleRemoveBtnClick = (e) =>{
    let parent = document.getElementById(e.target.parentElement.id)
    let grandparent = document.getElementById(parent.parentElement.id)
    grandparent.removeChild(parent) 
    // update states
    setnumberOfItems(document.getElementsByClassName("mini-productBox").length)
    setcheckOutSum(calcSum(document.getElementsByClassName("mini-productBox")))
    setnumberOfWishes(document.getElementsByClassName("mini-wishBox").length)
 
    }


  const calcSum = (elements) => { // calc 
    let newSum = 0
      for (let i=0;i<elements.length;i++){
        newSum += elements[i].value
      }
      return newSum
    }

  return (
    <div id="navBarTop">
      <main>
        <input id="searchBar" onChange={props.getUserInput}></input>
        <button><i className="fas fa-search"></i></button>
      </main>
      <aside>
        <Link to="/info">
          <div>Info</div>
        </Link>
        <Link to="/myAccount">
          <div>My Account</div>
        </Link>
          <div id="wishlist">Wishlist
          <br></br>({numberOfWishes})
          <div id="wishlistHover">
          <p>full view</p>
          </div>
          </div>
          <div id="shoppingCartNav">Shopping Cart 
          <br></br>({numberOfItems})
          <div id="shoppingCartHover">
          <p>{checkOutSum}€ total</p>
          <p>checkout</p>
          </div>
          </div>
     
      </aside>
    </div>
  );
};
export default NavBar;
