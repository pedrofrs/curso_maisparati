const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;
let numero = parseFloat(prompt("Digite um número (digite 0 para sair):"));

while (numero !== 0) {
    soma += numero;
    contador++;
    numero = parseFloat(prompt("Digite um número (digite 0 para sair):"));
}

if (contador === 0) {
    console.log("Nenhum número foi digitado.");
} else {
    const media = soma / contador;
    console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}`);
}
