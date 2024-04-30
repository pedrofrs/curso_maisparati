const prompt = require('prompt-sync')();

let valor = parseInt(prompt("Digite um número (digite 0 ou negativo para sair):"));

while (valor > 0) {
    if (valor % 2 === 0) {
        console.log(`${valor} é PAR`);
    } else {
        console.log(`${valor} é ÍMPAR`);
    }
    valor = parseInt(prompt("Digite um número (digite 0 ou negativo para sair):"));
}

