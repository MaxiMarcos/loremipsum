// Creamos el modelo para trabaja con la BD

const { Sequelize} = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')

//class User extends Model {}

const User = dbInstance.define('User',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize: dbInstance,
    modelName: 'User', // el nombre del modelo
    createdAt: false,
    updatedAt: false
})

// User.sync()

dbInstance.sync()
.then(() => {
    console.log('Modelos sincronizados')
})
.catch(err => {
    console.error('Error al sincronizar')
})


module.exports = {User}