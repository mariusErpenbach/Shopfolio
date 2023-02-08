import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
 
    const Register = async (e) => {
        e.preventDefault();



        try {
// we post our data object to users. We declared a route in our backend index to our Register function there. 
            await axios.post('http://localhost:5000/users', {

// since the database uses a unique key for email adress, we prevent the user from chosing an existing one.
                name: name, 
                email: email,
                password: password,
                confPassword: confPassword
            });
// Then we open the registrationSuccess page to welcome the new user
           window.open("/registrationSuccess")  
        } catch (error) {
           
            if (error.response) {
          
                setMsg(error.response.data.msg);
            }
        }
    }

    return(<form id="RegisterForm" onSubmit={Register}>
                   <p>{msg}</p>
                                <div>
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Name"
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <button >Register</button>  
                                </div>
    </form>)
}

export default RegisterForm