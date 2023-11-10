const express = require('express')
const authenticationHandler = require('../middleware/authenticator.js')

const app = express()
const port = 5000

app.get('/logout', (req, res) => {
    res.set('WWW-Authenticate', 'Basic realm="user-pages"')
    res.status(401).send("<h1>You are logout now</h1>")
})

app.get('/login', authenticationHandler, (req, res) => {
    res.status(200).send("<h1>You are login now</h1>")
})

app.get('/admin', authenticationHandler, (req, res) => {
    res.status(200).send("<h1>Welcome admin</h1>")
})

app.get('/*', (req, res) => {
    res.status(404).send("<h1>Page not found</h1>")
})

app.listen(port, () => {
    console.log(`The server is listening on the port ${port}: http://localhost:${port}`)
})