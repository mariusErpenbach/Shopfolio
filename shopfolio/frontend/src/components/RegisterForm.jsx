import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {

    let history = useNavigate();

    const [data, setData] = useState({
        first_name:"",
        last_name:"",
        email_adress:"",
        password:""
    }) // our state is a object with 4 fields, we use our handleChange to configure the values.

    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
        console.log(data)
    } 
 
    const submitForm = (e) =>{
        e.preventDefault();
        console.log(data)
        let formData = new FormData()
        formData.append("text","testText")
        const url = "http://localhost/react-backend/"
        axios.post(url,formData)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }

    return(<form id="RegisterForm" onSubmit={submitForm}>
    <h3>sign up</h3>
    <input 
    onChange={handleChange} 
    type="text" 
    name="first_name"
    value={data.first_name}
    placeholder="first name">
    </input>
    <input 
       onChange={handleChange}
    type="text" 
    name="last_name"
    value={data.last_name}
    placeholder="last_name"> 
    </input>
    <input 
       onChange={handleChange}
    type="email"
    name="email_address" 
    value={data.email_address}
    placeholder="email@address"> 
    </input>
    <input 
       onChange={handleChange}
    type="password"
    name="password" 
    value={data.password}
    placeholder="password"> 
    </input>
    <input type="submit" name="submit" value="Register" ></input>
    </form>)
}

export default RegisterForm