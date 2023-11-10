const {decode} = require('base-64')

const authenticationHandler = (req, res, next) => {
    const [username, password] = decode((req.headers.authorization || ' ').trim().replace(/Basic\s/i, '')).split(':')

    if (username !== 'admin' || password !== 'admin') {
        res.set('WWW-Authenticate', 'Basic realm="user-pages"')
        return res.status(401).send("Not authorized")
    }

    next()
}

module.exports = authenticationHandler