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


const logoutUser = (req, res) => {
    const foundUser = db.users.find(user => user.username === req.body.username && user.session === true)
    console.log("Logout", foundUser)
    foundUser.session = false
    let data = db.users.filter(user => user.username !== req.body.username)
    data = [...data, foundUser]
    db.setUsers(data)
    writeJson()
    res.status(200).json(db.users)
}

module.exports = logoutUser