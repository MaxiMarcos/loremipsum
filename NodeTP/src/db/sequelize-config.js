const { Sequelize } = require('sequelize')

// Creamos instancia de conexión a la base de datos

const dbInstance = new Sequelize({
    host: "localhost", //host donde se aloja la BD
    database: "Tp_Node_Santex", // nombre de BD
    username: "root", 
    password: "tupassword",
    port: 3306,
    dialect: "mysql" // motor de BD con que trabajamos.
})


module.exports = {dbInstance}