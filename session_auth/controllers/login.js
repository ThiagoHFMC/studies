const fs = require('fs') 

const db = {
    users: require('../models/users.json'),
    setUsers: function(data) { this.users = data }
}

const writeJson = async () => {
    fs.writeFile('./models/users.json', JSON.stringify(db.users, null, 2), (err) => { 
        if(err) throw err; 
        console.log("Data has been written to file successfully."); 
    }); 
}


const loginUser = (req, res) => {
    const foundUser = db.users.find(user => user.username === req.body.username && user.password === req.body.password) 
    console.log(foundUser)
    foundUser.session = true
    let data = db.users.filter(user => user['id'] !== foundUser.id)
    data = [...data, foundUser]
    db.setUsers(data)
    writeJson()
    res.status(200).json(db.users)
}

module.exports = loginUser