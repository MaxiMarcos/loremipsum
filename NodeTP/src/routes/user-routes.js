const express = require('express')
const userController = require('../controllers/user-controller')

const router = express.Router()


router.get('/get-users', userController.getAllUsers)
router.get('/get-id-users/:id', userController.getUserById)
router.post('/create', userController.createUser)

module.exports = router