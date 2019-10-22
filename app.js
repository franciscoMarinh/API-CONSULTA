const app = require('express')()
const bodyParser = require('body-parser')
const consign = require('consign')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.set('json spaces', 4)

app.db = require('./models')

consign()
    .include('controller')
    .then('routes')
    .into(app)

if(process.env.NODE_ENV != "test"){
    app.listen(4000,()=>{
        console.log("Servidor Rodando!!")
    
    })
}


module.exports = app