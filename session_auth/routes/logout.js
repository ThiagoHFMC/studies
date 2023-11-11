const express = require('express')
const router = express.Router()

const authorizationHandler = require('../middleware/authorization.js')
const logoutUser = require('../controllers/logout.js')

router.get('/logout', authorizationHandler, logoutUser)

module.exports = router