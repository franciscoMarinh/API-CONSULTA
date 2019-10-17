module.exports = app => {

    app.route("/users")
        .get(app.controller.users.findAll)
    
    app.route("/users/:id")
        .get(app.controller.users.findOne)

    app.route("/users/:id/tasks")
        .get(app.controller.users.findAllTasks)

}