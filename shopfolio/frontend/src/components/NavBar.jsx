import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Searchbar from "./navBarComponents/Searchbar";

// import { useNavigate } from 'react-router-dom';

const NavBar = (props) => {

 

  // const navigate = useNavigate();
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    refreshToken();
    getUsers();
}, []);


  const refreshToken = async () => { // we create an async function called refreshToken
    try {
        const response = await axios.get('http://localhost:5000/token'); // we use a const response to GET a new token from our backend. 
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        
        setName(decoded.name);
       
        setExpire(decoded.exp);
    } catch (error) {
        if (error.response) {
        
        }
    }
}
  const axiosJWT = axios.create(); 

  axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5000/token'); // get from token = refreshToken()
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        console.log(token)
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

const getUsers = async () => { 
  const response = await axiosJWT.get('http://localhost:5000/users', {
      headers: {
          Authorization: `Bearer ${token}`
      }
  });
  setUsers(response.data);
}


  const Logout = async () => { // 
    try {
        await axios.delete('http://localhost:5000/logout');
        window.open("/","_self")
    } catch (error) {
        console.log(error);
    }
}


const loginPopUp = () => {
    let element = document.querySelector("#loginForm")
    if(element.style.display !== "flex")
    element.style.display = "flex";
    else {
      element.style.display = "none";
    }
}



  const miniWishList = props.wishListItems.map((item,i)=>(
    <div className="mini-wishBox" key={i} value={item} >{item}
    <button onClick={props.removeWish}>
    <i className="fas fa-times"  ></i>
    </button></div>
  ))

  const miniCartList = props.shoppingCartItems.map((item,i)=>(
    <div className="mini-productBox" key={i} value={item[0]}>{item}
    <button onClick={props.removeCartItem}>
    <i className="fas fa-times" ></i>
    </button></div>
  ))

const totalSum = props.shoppingCartItems.reduce(
  ( accumulator, currentValue ) => accumulator + parseInt(currentValue[1]),
  0
);


  return (
    <div id="navBarTop">
    
        <Searchbar getUserInput={props.getUserInput} ></Searchbar>
      
      <aside id="navBarTopRight">
        
          <div className="navBarButton"><Link to="/info" >Info </Link></div>

          <div className="navBarButton" id="myAccount">
          {name?name:(<p onClick={loginPopUp}>my<br/> Account</p>)}
          
          <br/>
          <LoginForm/>
          
          </div>
          <div className="navBarButton" id="wishlist">
          Wishlist
          <br/>
          ({props.wishListItems ? props.wishListItems.length:0})
          <div id="wishlistHover">
          {miniWishList}
            <p>full view</p>
          </div>
        </div>
        <div className="navBarButton" id="shoppingCartNav" >
          Shopping Cart
          <br></br>({props.shoppingCartItems ? props.shoppingCartItems.length:0})
          <div id="shoppingCartHover">
            <p>{totalSum}€ total</p>
            {miniCartList}
            <Link to="/checkOut"
                state={{checkOutItems:props.checkOutItems}}>
                checkout
                </Link>
          </div>
        </div>

        {name?(<button onClick={Logout}>Log Out</button>):<div></div>}
      </aside>
    </div>
  );
};
export default NavBar;
