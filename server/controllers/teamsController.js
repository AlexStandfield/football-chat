module.exports = {
    getTeams: (req, res) => {
        req.app.get('db').teams.get_teams()
            .then(teams => res.status(200).send(teams))
            .catch(err => res.status(500).send(err))
    }
}