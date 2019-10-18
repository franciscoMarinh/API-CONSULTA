module.exports = app => {

    app.route("/tasks")
        .get(app.controller.tasks.findAll)
    
    app.route("/tasks/:id")
        .get(app.controller.tasks.findOne)

    app.route("/tasks/:id/users")
        .get(app.controller.tasks.findTaskUsers)
        
}