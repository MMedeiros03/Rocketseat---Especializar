// for of (parecido com foreach)

let nome = 'Matheus'
let nomes = [
    'joao',
    'paulo',
    'pedro'
];

for(let char of nome){
    console.log(char)
}

for(let nome of nomes){
    console.log(nome)
}

// for in (repete entre as propriedades)
let person = {
    name:'matheus',
    age:30,
    weight: 88.6
}

for(let property in person){
    console.log(property) // acessar as proprias propriedades
    console.log(person[property]) // acessar o valor das propriedades
}