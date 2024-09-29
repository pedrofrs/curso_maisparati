const prompt = require('prompt-sync')();

const numeroDeMacas = parseInt(prompt("Quantas maças deseja comprar?"))

let precoPorMaca
let total

if (numeroDeMacas < 12) {
    precoPorMaca = 0.30
} else {
    precoPorMaca = 0.25
}

total = numeroDeMacas * precoPorMaca
console.log(`O total da compra é R$ ${total.toFixed(2)}`)
