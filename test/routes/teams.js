let teams = require('../../models').teams;
let fakeTeam;

describe("Route: /users", ()=>{
    beforeEach(done => {
        teams.destroy({where: {}})
            .then( () => {
                teams.create({
                    name: "T-manager"
                })
                .then(team => {
                    fakeTeam = team
                    done()
                })
            })

    })//End beforeEach

    describe('Get /users', () => {
        it("status 200", done => {
            request.get('/users')
                .expect(200)
                .end((err,res) => {
                    done(err)
                })
        })
    })
    describe('Post /users', () => {
        it("status 200", done => {
            request.post(`/users/${fakeTeam.id}/users`)
                .send({
                    name: "Francisco",
                    email: "franc1sc1566@gmail.com"
                })
                .expect(200)
                .end((err,res) => {
                    done(err)
                })
        })
    })


})