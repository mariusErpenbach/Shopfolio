import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
 
export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','name','email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}
 
export const Register = async(req, res) => {
    // 4 variables getting passed from the frontend. 
    const { name, email, password, confPassword } = req.body;
    // we check if password is matching the confPassword 
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});
    // we encrypt the user password  
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
// also: The database has a unique key for email adresses. This prevents the user from entering or to claim an existing one.
    try {
        // we try to create an entry on the users db
        await Users.create({
            name: name,
            email: email,
            password: hashPassword
        });
        res.json({msg: "Registration Successful"}); 
    } catch (error) {
        console.log(error);
    }
}
 
export const Login = async(req, res) => {
 
    try {

        // first we search for the right user in our Database Users, by using findAll().  
        const user = await Users.findAll({
            where:{ // "where" resembles the place to look for, in my case its the email column that matched the Email address the user has entered. 
                email: req.body.email 
            }
        });
// with bcrypt.compare() we can compare the password the user has entered with the password in our database.
        const match = await bcrypt.compare(req.body.password, user[0].password); 
// compare() returns boolean that we can check now
        if(!match) return res.status(400).json({msg: "Wrong Password"}); 
// Now that we know the users input was correctly, we assign our variables with values from the database.
        const userId = user[0].id;  
        const name = user[0].name;
        const email = user[0].email;
        
// we create an object with the jwt.sign() function.
// The first parameter is an object with the userData(id,name,email)
// The second parameter is process.ACCESS_TOKEN_SECRET 
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            // expiresIn declares how long the token is usable
            expiresIn: '15s' 

        }); 
// we create another object for the refreshToken, again with the same parameters. 
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'

        });
        await Users.update({refresh_token: refreshToken},{ // the refreshToken will be updated.
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{  
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"Email not found"});
    }
}
 
export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}
