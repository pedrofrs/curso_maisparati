const prompt = require('prompt-sync')();

const quantidade = parseInt(prompt("Digite a quantidade de maçãs compradas: "));

const precoUnitario = (quantidade < 12) ? 0.30 : 0.25;
const valorTotal = quantidade * precoUnitario;

console.log(`O valor total da compra é: R$${valorTotal.toFixed(2)}`);
