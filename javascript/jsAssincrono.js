function fodase(fuck){
    console.log('testando callback')
    fuck()
}

fodase(function(){
    console.log('fodase dnv')
})

setTimeout(function(){
    console.log("aguardei 1s para executar")}, 
    1000)

const https = require('https')
const API = 'https://viacep.com.br/ws/89111042/json/'
https.get(API, res=>{
    console.log(res.statusCode)
})
console.log("conectando api");
