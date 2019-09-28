module.exports = {
    checkAdmin: (req, res, next) => {
        if(!res.session.users.admin){
            return res.status(403).send('You are not an admin')
        }
        next()
    }
}