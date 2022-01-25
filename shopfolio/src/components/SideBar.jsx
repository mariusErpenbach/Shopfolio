import React,{useEffect} from "react"

const SideBar = (props) => {

useEffect(() => {
let elements = document.querySelectorAll("#categoriesSideBar>p")
for (let i=0;i<elements.length;i++){
 elements[i].addEventListener("click",props.categoryFilter)
}
});



    return(
    <div id="sideBar">
    <div id="categoriesSideBar">
      <p>Woman</p>
      <p>Man</p>
      <p>Kids</p>
      <p>Sport</p>
      <p>Shoes</p>
      <p>Home Goods</p>
      <p>Sale%</p>
    </div>
  </div>)
}

export default SideBar