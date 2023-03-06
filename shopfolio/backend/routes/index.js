import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import mysql from 'mysql2/promise';

const router = express.Router();
 
router.get('/users', verifyToken, getUsers); // 
router.post('/users', Register); 
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.get('/products', verifyToken, async (req, res) => {
  try {
    const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'headstrong312',
      database: 'mydb'
    });

    const conn = await pool.getConnection();
    const [rows, fields] = await conn.query('SELECT * FROM products');
    conn.release();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});


export default router;