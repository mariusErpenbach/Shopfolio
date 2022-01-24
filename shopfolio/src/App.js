import React,{useState} from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Products from "./components/Products"
import data from "./components/Cataloge.json"
function App() {
 
const [items, setitems] = useState(data);
const [userInput, setuserInput] = useState("");
const [filteredData, setfilteredData] = useState([]);


const getuserInput = (e) =>{
  setuserInput(e.target.value)
  getfilteredData("words");
  }

const wordFilter = () => {
  const userInputLetters = userInput.toLocaleLowerCase().trim(); 
  const userInputLength = userInputLetters.length;
  let newArray = data.filter((item)=>{
  console.log(item.productName.slice(0,userInputLength))
    const slicedProductName = item.productName.slice(0,userInputLength);
    if (userInput === slicedProductName.toLocaleLowerCase()){
      return item.productName
    } 
   else return (console.log("filter is empty"))
  })
  return newArray
}


const userCategory =(e)=>{
  e.prevenDefault()
  console.log(e.target.innerHTML)
  let newArray = data.filter((item)=>{
  
    if (e.target.innerHTML.toLowerCase() === item.productCategorie.toLowerCase()){
      return item.productName
    }
  })

setfilteredData(newArray)
}


const getfilteredData = (filter) =>{
  if (filter==="words"){
   let words = wordFilter();
   setfilteredData(words)}
 }
  return (
    <div className="App">
    <header id="navBar">
      <p id="companyLogo"> Goodys </p> 
      <NavBar getUserInput={getuserInput}
      
      />
    </header>
    <SideBar categoryFilter={userCategory}/>
    <Products items={ filteredData ? filteredData : items}/>
    </div>
  );
}

export default App;
