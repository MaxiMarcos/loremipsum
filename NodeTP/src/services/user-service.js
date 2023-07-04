
const {User} = require('../models/user')

const getAll = async () => {
    const listUsers = await User.findAll()

    return listUsers
}

const getById = async (id) => {
    const Users = await User.findByPk(id)

    return Users
}

const createUser = async (name, pw, email) => {
    const user = new User()

    user.Name = name
    user.Pw = pw
    user.Email = email

    const userCreated = await user.save()
    return userCreated
}

module.exports = {getAll, getById, createUser}