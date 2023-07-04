const userService = require('../services/user-service')

// Controlador (procesa la petición y envía la respuesta)

// Obtener usuarios
const getAllUsers = async (req, res) => {
    
    const users = await userService.getAll()

    res.status(200).send(users)
}

const getUserById = async (req, res) => {
    const {id} = req.params
    const user = await userService.getById(id)

    res.status(200).send(user)
}

const createUser = async (req, res) => {
    const {Name, Pw, Email} = req.body
    const user = await userService.createUser(Name, Pw, Email)

    res.status(200).send(user)
}


module.exports = {getAllUsers, getUserById, createUser}