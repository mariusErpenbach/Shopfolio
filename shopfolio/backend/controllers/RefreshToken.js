import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";
 
export const refreshToken = async(req, res) => {
    try {
        
        const refreshToken = req.cookies.refreshToken;  // we pick up the refreshToken from the request cookie.
        
        if(!refreshToken) return res.sendStatus(401); // if we dont have a refreshToken we just end the call with status 401

        const user = await Users.findAll({ // If we have a refreshToken we want to check out the Users table to find the user with the corresponding refreshToken.  
            where:{ 
                refresh_token: refreshToken 
            }
        });
        
        if(!user[0]) return res.sendStatus(403); // if we dont have a match we end the call with status 403

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userId = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
}