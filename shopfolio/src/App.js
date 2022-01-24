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
  getfilteredData();
  }

const getfilteredData = () =>{
  const userInputLetters = userInput.toLocaleLowerCase().trim();
  const userInputLength = userInputLetters.length;

  let newArray = data.filter((item)=>{
  console.log(item.productName.slice(0,userInputLength))
    const slicedProductName = item.productName.slice(0,userInputLength);
    if (userInput === slicedProductName.toLocaleLowerCase()){
      return item.productName
    } 
   
  })
  console.log(newArray)
  setfilteredData(newArray)
}



  return (
    <div className="App">
    <header id="navBar">
      <p id="companyLogo"> Goodys </p> 
      <NavBar getUserInput={getuserInput}
      />
    </header>
    <SideBar/>
    <Products items={ userInput ? filteredData : data}/>
    </div>
  );
}

export default App;
