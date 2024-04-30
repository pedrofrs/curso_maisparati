const prompt = require('prompt-sync')();

const codigo = parseInt(prompt("Digite o código de origem do produto: "));

switch (codigo) {
    case 1:
        console.log("Região Norte");
        break;
    case 2:
        console.log("Região Nordeste");
        break;
    case 3:
        console.log("Região Centro-Oeste");
        break;
    case 4:
        console.log("Região Sudeste");
        break;
    case 5:
        console.log("Região Sul");
        break;
    default:
        console.log("Código inválido");
}
