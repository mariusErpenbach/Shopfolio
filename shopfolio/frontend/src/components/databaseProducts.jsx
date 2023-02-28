import React from "react";

const databaseProducts = (props) =>{
    const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'headstrong312',
  database: 'mydb'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server');
});

return(<div>
shit
</div>)
}

export default databaseProducts
