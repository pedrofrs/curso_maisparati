const prompt = require('prompt-sync')();

const A = parseInt(prompt("Escreva o número 1:"))
const B = parseInt(prompt("Escreva o número 2:"))

if (A < B) {
    console.log(`Ordem crescente: ${A}, ${B}`)
} else {
    console.log(`Ordem crescente: ${B}, ${A}`)
}