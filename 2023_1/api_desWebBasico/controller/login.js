//const { json } = require('body-parser')
const Login = require('../model/login')
const rota = '/login'

module.exports = app => {
    app.get(rota, (req, res) => {
       // retorna os dados??
       Login.lista(res)
    })
    app.get((rota+'/:id'),(req, res) => {
       let id = parseInt(req.params.id)
       Login.buscaPorId(id, res)
    })
    app.post(rota, (req, res) => {
       console.log(req.body)
       Login.adiciona(req.body, res)
       //res.send('Você esta na rota '+ rota +' via POST')
    })
    //PUT??
    app.patch((rota+'/:id'),(req, res) =>{
       let id = parseInt(req.params.id)
       let valores = req.body
       Login.altera(id, valores, res)
    })
 }
 //Testar POST - Abra o CMD no windows
 //curl -d "email=juliana.silva@up.edu.br&senha=12345" http://localhost:3000/login
 /* JSON - http://localhost:3000/login
 {
     "email" : "juliana.silva@up.edu.br",
     "senha" : "12345"
 }
 */