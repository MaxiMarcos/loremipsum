// Creamos el modelo para trabaja con la BD

const { Model, DataTypes , Sequelize} = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')


// Conectando a base de datos

dbInstance
    .authenticate()
    .then(() => {
        console.log('Modelos sincronizados')
    })
    .catch(err => {
        console.error('Error al sincronizar')
    })

// DEFINIMOS MODELO QUE REPRESENTA TABLAS DE MI BD

class User extends Model {}

User.init({
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Pw: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
    },
}, {
    sequelize: dbInstance,
    modelName: 'User', // el nombre del modelo
    tableName: 'Tabla_Usuarios',
    createdAt: false,
    updatedAt: false
})

// User.sync()


module.exports = {User}