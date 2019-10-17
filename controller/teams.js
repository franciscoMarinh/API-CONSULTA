module.exports = app => {

    return{
        findAll: async (req,res) => {
            try {
                let teams = await app.db.teams.findAll({})
                res.json(teams)
            } catch (error) {
                res.sendStatus(400)
            }
        },
        findOne: async (req,res) => {
            try {
                let team = await app.db.teams.findByPk(req.params.id)
                res.json(team)

            } catch (error) {
                res.sendStatus(400)
            }
        },
        findTeamUsers: async (req,res) => {
            try {
                let team = await app.db.teams.findByPk(req.params.id)
                let teamUsers = await team.getUsers()

                res.json(teamUsers)

            } catch (error) {
                res.sendStatus(400)
            }
        },
        addUsers: async (req,res) => {
            try {
                let team = await app.db.teams.findByPk(req.params.id)
                let teamUsers = await team.setUsers(req.params)
                res.json(teamUsers)

            } catch (error) {
                res.sendStatus(400)
            }
        }
    }//Close return

}//Close exports