const prompt = require('prompt-sync')();
let soma = 0;
for (let i = 0; i < 5; i++){
    const numero = parseFloat(prompt(`${i + 1} - Escolha um número:` ))
    soma += numero
}
console.log(`TOTAL: ${soma}`)
