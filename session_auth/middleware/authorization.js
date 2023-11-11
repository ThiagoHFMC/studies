const db = {
    users: require('../models/users.json'),
    setUsers: function(data) { this.users = data },
}

const authorizationHandler = (req, res, next) => {
    const [username, password] = [req.body.username, req.body.password]
    const foundUser = db.users.find(user => user.username === req.body.username && user.session === true)

    if (!foundUser) {
        return res.status(401).send("<h1>You are not authorized</h1>")
    }

    next()
}

module.exports = authorizationHandler