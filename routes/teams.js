const { check } = require('express-validator')

module.exports = app => {

    app.route('/teams')
        .get(app.controller.teams.findAll)

    app.route('/teams/:id')
        .get(app.controller.teams.findOne)

    app.route('/teams/:id/users')
        .get(app.controller.teams.findTeamUsers)
        .post([
            check('email').isEmail()
        ],app.controller.teams.validator,app.controller.teams.createUser) 
    
}