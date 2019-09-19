module.exports = {
    getPosts: (req, res) => {
        req.app.get('db').get_posts()
            .then(posts => res.status(200).send(posts))
            .catch(err => res.status(500).send(err))
    },
    addPosts: (req, res) => {
        const {teamId, title, description} = req.body

        req.app.get('db').add_posts([teamId, title, description])
            .then((response) => res.status(200).send(response))
            .catch(err => {
                res.status(500).send({errorMessage: 'Error'})
                console.log(err)
            })
    },
    deletePosts: (req, res) => {
        const {id} = req.params

        req.app.get('db').delete_posts([id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({errorMessage: 'Error'})
                console.log(err)
            })
    },
    updatePosts: (req, res) => {
        const {teamId, title, description} = req.body

        req.app.get('db').update_posts([teamId, title, description])
            .then((response) => res.status(200).send(response))
            .catch(err => {
                res.status(500).send({errorMessage: 'Error'})
                console.log(err)
            })
    }
}