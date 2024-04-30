const prompt = require('prompt-sync')();

let soma = 0;
let somaPesos = 0;
let numero = parseFloat(prompt("Digite um número (digite 0 para sair):"));

while (numero !== 0) {
    const peso = parseFloat(prompt("Digite o peso para este número:"));
    soma += numero * peso;
    somaPesos += peso;
    numero = parseFloat(prompt("Digite um número (digite 0 para sair):"));
}

if (somaPesos === 0) {
    console.log("Nenhum número foi digitado.");
} else {
    const media = soma / somaPesos;
    console.log(`A média ponderada dos números digitados é: ${media.toFixed(2)}`);
}
