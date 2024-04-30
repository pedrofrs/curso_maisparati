const prompt = require('prompt-sync')();

const eleitores = parseInt(prompt("Digite o número total de eleitores: "));
const brancos = parseInt(prompt("Digite o número de votos em branco: "));
const nulos = parseInt(prompt("Digite o número de votos nulos: "));
const validos = parseInt(prompt("Digite o número de votos válidos: "));

const percentualBrancos = (brancos / eleitores) * 100;
const percentualNulos = (nulos / eleitores) * 100;
const percentualValidos = (validos / eleitores) * 100;

console.log(`Percentual de votos em branco: ${percentualBrancos.toFixed(2)}%`);
console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
