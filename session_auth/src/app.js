const express = require('express')

const app = express()
const port = 5000
const userRoute = require('../routes/users.js')
const loginRoute = require('../routes/login.js')
const logoutRoute = require('../routes/logout.js')

app.use(express.json())

app.use('/users', userRoute)

app.use('/', loginRoute)
app.use('/', logoutRoute)

app.get('/*', (req, res) => {
    res.status(200).send("<h1>ERROR 404: This page does not exist!</h1>")
})

app.listen(port, () => {
    console.log(`The server is listening on the port ${port}: http://localhost:5000/`)
})



