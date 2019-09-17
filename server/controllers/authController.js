const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        // Body Info
        const {full_name, email, username, password, admin} = req.body
        // DB Instance
        const db = req.app.get('db')
        // Look for an Existing user with that username
        const foundUser = await db.find_user([username])
        // Check to see if that username exists
        if(foundUser[0]){
            return res.status(409).send('Username is Taken')
        }
        // Look for an Existing user with that email
        const foundEmail = await db.find_email([email])
        // Check to see if that email exists
        if(foundEmail[0]){
            return res.status(409).send('Email is already in use')
        }
        // Salt and Hash the password
        const passwordSalt = bcrypt.genSaltSync(15)
        const passwordHash = bcrypt.hashSync(password, passwordSalt)
        // Register the User
        const newUser = await db.register_user([full_name, email, username, passwordHash, admin])
        //Remove Password
        delete newUser[0].password
        // Session
        req.session.user = newUser[0]
        // Send a Response
        res.status(200).send(newUser[0])
    },
    login: async (req, res) => {
        // Body Info
        const {username, password} = req.body
        // DB Instance
        const db = req.app.get('db')
        // Find User with Username
        const foundUser = await db.find_user([username]) 
        // Check to see length of User
        if(!foundUser[0]){
            return res.status(409).send('Incorrect Username')
        }
        // Check if the user is Authenticated
        const authedPassword = bcrypt.compareSync(password, foundUser[0].password)
        if(authedPassword){
            // Remove Password
            delete foundUser[0].password
            req.session.user = foundUser[0]
            res.status(200).send(foundUser[0])
        } else {
            res.status(401).send('Incorrect Password')
        }
    },
    logout: (req, res) => {
        // Destory the Session to Logout
        req.session.destroy
        return res.sendStatus(200)
    }
}