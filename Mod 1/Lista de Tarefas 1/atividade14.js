const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Escolha um número: "))
let fatorial = 1;
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}
console.log(`Fatorial de ${numero} é: ${fatorial}`)
