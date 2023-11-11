const express = require('express')
const router = express.Router()

const authenticationHandler = require('../middleware/authenticator.js')
const loginUser = require('../controllers/login.js')

router.get('/login', authenticationHandler, loginUser)

module.exports = router