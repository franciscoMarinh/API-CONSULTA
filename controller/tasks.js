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
        findTaskUsers: async (req,res) => { //Not Used But Good example

            try {
                let task = await app.db.tasks.findOne({
                    where: {
                        id: req.params.id
                    },
                    attributes: [],
                    include: [{
                        model: app.db.users,
                        through: {
                            attributes: []
                        }
                    }]
                })
                res.json(task)

            } catch (error) {
                res.sendStatus(400)
            }

        }
    }//Close return
}//Close consign export