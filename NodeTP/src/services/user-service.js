// Nos conectamos a la Base de Datos
const {User} = require('../models/user')

const getAll = async () => {
    const listUsers = await User.findAll()

    return listUsers
}

module.exports = {getAll}