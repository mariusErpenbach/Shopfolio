// import { Sequelize } from "sequelize";
 
// const productsdb = new Sequelize('products', 'root', 'headstrong312', {
//     host: "localhost",
//     dialect: "mysql"
// });
 
// export default productsdb;

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});