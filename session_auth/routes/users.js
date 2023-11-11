const express = require('express')

const {
    createUser,
    getUser, 
    updateUser, 
    deleteUser
} = require('../controllers/users.js')

const router = express.Router()

const authorizationHandler = require('../middleware/authorization.js')

router.post('/', authorizationHandler, createUser)
router.get('/:id', authorizationHandler, getUser)
router.put('/:id', authorizationHandler, updateUser) 
router.delete('/:id', authorizationHandler, deleteUser)

module.exports = router