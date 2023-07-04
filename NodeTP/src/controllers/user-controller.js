const userService = require('../services/user-service')

// Controlador (procesa la petición y envía la respuesta)

// Obtener usuarios
const getAllUsers = async (req, res) => {
    
    const users = await userService.getAll()

    res.status(200).send(users)
}

module.exports = {getAllUsers}