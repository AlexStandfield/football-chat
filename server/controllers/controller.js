module.exports = {
    update: (req, res) => {
        const {full_name, email, username, password, admin} = req.body
        req.app.get('db').update_user([full_name, email, username, password, admin])
            .then((response) => res.status(200).send(response))
            .catch(err => {
                res.status(500).send({errorMessage: 'Error'})
                console.log(err)
            })
    }
}