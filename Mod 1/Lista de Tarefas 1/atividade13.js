const prompt = require('prompt-sync')();


let soma = 0
let contador = 0
let numero

do {
    numero = parseFloat(prompt("Digite um número decimal:"));
    if (numero !== 0) {
        soma += numero;
        contador++;
    }
} while (numero !== 0)
    
if (contador > 0) {
    console.log(`A média aritmética é: ${soma / contador}`);
} else {
    console.log("Nenhum número foi informado.");
}