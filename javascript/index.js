// comentarios //
// // // // // //

/*

comentario em bloco
console.log("oi")

*/

// ESCOPOS DE VARIAVEIS --- VAR

console.log("existe x antes do bloco?",x) // gera erro - undefined 
{
    var x = 0 // var = variavel global que pode ser utilizada em todo o programa
}
console.log("existe x depois do bloco?",x) // funciona



// ESCOPOS DE VARIAVEIS --- CONST

const y = 1 // permite nomes iguais, pois os escopos sao diferentes;
console.log("existe y antes do bloco?",y) // gera erro - undefined 
{
    const y = 0 
    console.log("existe y antes do bloco?",y) // funciona
}

console.log("existe y depois do bloco?",y) // gera erro - undefined 

let nome = "Matheus";
let age=18,isHuman=true;

// concatenacao
console.log('o ' + nome + " tem" + age + " anos.");

// interpolando de strings 
console.log(`o ${nome} tem${age} anos.` );


// Object
const person = {
    nome: "Matheus",
    age: 30,
    weight: 70.6,
    isAdmin: true
} 
console.log(person.nome) // imprimir somente o nome do objeto


const animals = [
    'lion', 'monekey', 'tiger', 
]
// acessar valores em um array:
console.log(animals[0])

//1 
let weight
//2
console.log(typeof weight)
//3
let name = "Matheus"
let Age = 19
let stars = 1.70
let isSubscribed = false
//4
const studant = {
    name : "Matheus",
    Age : 19,
    stars : 1.70,
    isSubscribed : false
}
console.log(`${studant.name} de idade ${studant.Age} mede ${studant.stars}.`)