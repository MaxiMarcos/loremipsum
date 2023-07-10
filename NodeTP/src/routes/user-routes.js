const express = require('express')
const userController = require('../controllers/user-controller')

const router = express.Router()


router.get('/get-users', userController.getAllUsers)
router.get('/get-id-users/:id', userController.getUserById)
router.post('/create', userController.createUser)
router.put('/edit-put/:id', userController.editUser)
router.delete('/delete-user/:id', userController.deleteUser)

module.exports = router