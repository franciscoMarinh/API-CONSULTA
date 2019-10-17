module.exports = app => {

    return{
        findAll: async (req,res) => {
            try {
                let tasks = await app.db.tasks.findAll({})
                res.json(tasks)
            } catch (error) {
                res.sendStatus(400)
            }
        },
        findOne: async (req,res) => {
            try {
                let task = await app.db.tasks.findByPk(req.params.id)
                res.json(task)

            } catch (error) {
                res.sendStatus(400)
            }
        },
        findAllUsers: async (req,res) => {
            try {
                let task = await app.db.tasks.findByPk(req.params.id)
                let users = await task.getUsers({
                    
                })
                res.json(users)

            } catch (error) {
                res.sendStatus(error)
            }
        },
    }//Close return
}//Close consign export