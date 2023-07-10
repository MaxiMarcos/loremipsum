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

const editUser = async (req, res) => {
    const Id = req.params.id
    const {Name, Pw, Email } = req.body

    const nuevoUser = await userService.editUser(Id, Name, Pw, Email)
    
    res.status(200).send(nuevoUser)
}

const deleteUser = async (req, res) => {
    const id = req.params.id

    await userService.deleteUser(id)
    
    res.status(200).send(`Se ha borrado el usuario ${id} exitosamente`)
}


module.exports = {getAllUsers, getUserById, createUser, editUser, deleteUser}