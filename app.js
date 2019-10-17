const app = require('express')()
const bodyParser = require('body-parser')
const consign = require('consign')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.set('json spaces', 4)

app.db = require('./models')

consign()
    .include('controller')
    .then('routes')
    .into(app)

app.listen(3000,()=>{
    console.log("Servidor Rodando!!")

})