module.exports = app => {

    return{
        findAll: async (req,res) => {
            try {
                let users = await app.db.users.findAll({})
                res.json(users)
            } catch (error) {
                res.sendStatus(400)
            }
        },
        findOne: async (req,res) => {
            try {
                let user = await app.db.users.findByPk(req.params.id)
                res.json(user)

            } catch (error) {
                res.sendStatus(400)
            }
        },
        findAllTasks: async (req,res) => {
            try {
                let user = await app.db.users.findByPk(req.params.id)
                let tasks = await user.getTasks({
                    
                })
                res.json(tasks)

            } catch (error) {
                res.sendStatus(error)
            }
        },
    }
}