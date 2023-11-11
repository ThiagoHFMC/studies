const fs = require('fs') 

const db = {
    users: require('../models/users.json'),
    setUsers: function(data) { this.users = data },
}

const writeJson = async () => {
    fs.writeFile('./models/users.json', JSON.stringify(db.users, null, 2), (err) => { 
        if(err) throw err; 
        console.log("Data has been written to file successfully."); 
    }); 
}

let cont = 2

const createUser = (req, res) => {
    const newUser = {
        id: cont,
        username: req.body.username, 
        password: req.body.password, 
        session: false
    }
    cont++
    db.setUsers([...db.users, newUser])
    writeJson()
    res.status(201).json(db.users)
}

const getUser = (req, res) => {
    res.status(200).json(db.users.find(user => user['id'] === Number(req.params.id)))
}

const updateUser = (req, res) => {
    const updatedUser = {
        id: Number(req.params.id),
        username: req.body.username, 
        password: req.body.password, 
        session: false
    }
    let data = db.users.filter(user => user['id'] !== Number(req.params.id))
    data = [...data, updatedUser]
    db.setUsers(data)
    writeJson()
    res.status(200).json(db.users)
}

const deleteUser = (req, res) => {
    const data = db.users.filter(user => user['id'] !== Number(req.params.id))
    db.setUsers(data)
    writeJson()
    res.status(200).json(db.users)
}

module.exports = {
    createUser,
    getUser, 
    updateUser, 
    deleteUser
}