
function somavalor(x,y){
    let soma = x + y
    console.log(soma)
}
somavalor(10,20)

function RetornaValor(){
    console.log("so para retornar um valor")
}RetornaValor()


//CALBACK  FUNCTION

// function sayMyName(name){
//     console.log("antes de executar a funcao callback")
//     name()
//     console.log("depois de executar a funcao callback")
// }

// sayMyName(
//     () => { // arrow funcion 
//         console.log("estou em uma callback")
//     }
// )

// Function Constructor 

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " esta andando"
    }
}
const pessoa1 = new Person("Matheus")
const pessoa2 = new Person("Joao")
const pessoa3 = new Person("Maria")
console.log(pessoa1.walk())
console.log(pessoa2.walk())
console.log(pessoa3.walk())

nomes = [
    'matheus',
    'medeiros',
    'oselame',
    'teste'
]

nomes.forEach(nome => {
    console.log(`${nome}`)
});

let i = 5
console.log()

// IF TERNÁRIO

let age = 20;
const canDrive = age>=18 ? "pode dirigir" : "nao pode dirigir"
console.log(canDrive)


// throw
function sayMyName(name = ""){
    if (name === ""){
        throw new Error("nome veio vazio")
    }
    console.log(name)
}
// try --- cath
try{
    sayMyName("Matheus")
}catch(e){
    console.log(e)
}

