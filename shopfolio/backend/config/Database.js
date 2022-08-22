import { Sequelize } from "sequelize";
 
const db = new Sequelize('auth_db', 'root', 'headstrong312', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;