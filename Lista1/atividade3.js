const prompt = require('prompt-sync')();

const a = parseInt(prompt("Digite o primeiro número inteiro: "));
const b = parseInt(prompt("Digite o segundo número inteiro: "));
const c = parseInt(prompt("Digite o terceiro número inteiro: "));

const primeiro = a + 25;
const segundo = b * 3;
const terceiro = c * 0.12;
const quarto = a + b + c;

console.log(`Resultado do primeiro inteiro + 25: ${primeiro}`);
console.log(`Resultado do segundo inteiro triplicado: ${segundo}`);
console.log(`Resultado do terceiro inteiro com 12% do valor original: ${terceiro}`);
console.log(`Soma dos três primeiros inteiros: ${quarto}`);
