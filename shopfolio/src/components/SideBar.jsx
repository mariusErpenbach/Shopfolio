import React,{useEffect} from "react"

const SideBar = (props) => {





    return(
    <div id="sideBar">
    <div id="categoriesSideBar">
      <p onClick={props.categoryFilter}>Woman</p>
      <p onClick={props.categoryFilter}>Man</p>
      <p onClick={props.categoryFilter}>Kids</p>
      <p onClick={props.categoryFilter}>Sport</p>
      <p onClick={props.categoryFilter}>Shoes</p>
      <p onClick={props.categoryFilter}>Home Goods</p>
      <p onClick={props.categoryFilter}>Sale%</p>
      <p onClick={props.clearFilter}> reset </p>
    </div>
  </div>)
}

export default SideBar