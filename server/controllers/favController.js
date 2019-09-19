module.exports = {
    getFavorites: (req, res) => {
        const {userID} = req.body
        req.app.get('db').get_favorites([userID])
            .then(favorites => res.status(200).send(favorites))
            .catch(err => res.status(500).send(err))
    },
    addFavorites: (req, res) => {
        const {teamID, userID} = req.body
        req.app.get('db').add_favorites([teamID, userID])
        .then((response) => res.status(200).send(response))
        .catch(err => {
            res.status(500).send({errorMessage:'Cannot Add Favorite'})
            console.log(err)
        })
    },
    deleteFavorites: (req, res) => {
        const {id} = req.params

        req.app.get('db').delete_favorites([id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({errorMessafe: 'Cannod Delete Favorite'})
                console.log(err)
            })
    }
}