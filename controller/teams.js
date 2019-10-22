const { validationResult } = require('express-validator')

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
        createUser: async (req,res) => {
            try {
                let team = await app.db.teams.findByPk(req.params.id)
                let teamUsers = await team.createUser(req.body)
                res.json(teamUsers)

            } catch (error) {
                res.sendStatus(400)
            }
        },
        validator: (req, res,next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(422).json({ errors: errors.array() });
            }
            next()
            
        }
    }//Close return

}//Close exports