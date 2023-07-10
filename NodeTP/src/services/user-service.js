
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

    const editUser = async (id, name, pw, email) => {
    
        const user = await getById(id)
    
        if (name) {
            user.Name = name
        }
        if (pw) {
            user.Pw = pw
        }
        if (email) {
            user.Email = email
        }
    
        const userEdited = await user.save()
        return userEdited


// VOLVER A INTENTAR CON EL findIndex
}

const deleteUser = async (id) => {
    
    const user = await getById(id)

    await user.destroy()
}

module.exports = {getAll, getById, createUser, editUser, deleteUser}