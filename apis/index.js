const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')
app.use(express.json())


app.route("/").get( (req,res)=> res.send("oi") )

app.route("/post").post( (req,res)=> res.send(req.body) )

// parametros no body

app.route("/params").post( (req,res) => {
    const {nome,cidade} = req.body
    req.send(nome) 
})

// parametros na rota

app.route("/params2/:nome").post( (req,res) => {
    res.send(req.params.nome) 
})

// Query params ----------- url: localhost:3000/params3?nome=matheus
app.route("/params3").get( (req,res) => {
    res.send(req.query) 
})

// consumindo api do github  

app.route("/git").get( (req,res) => {
    axios.get("https://api.github.com/users/MMedeiros03")
    .then((result) => {
           //res.send(result.data) // retorna json completo
           //res.send(result.data.login) // retorna somento um dado especifico
           res.send(`<img src="${result.data.avatar_url}"/>`)
    })
    .catch((error) => {
        console.error(error)
    });
})
