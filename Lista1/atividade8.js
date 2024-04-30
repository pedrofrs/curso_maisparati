const prompt = require('prompt-sync')();

const a = parseFloat(prompt("Digite o primeiro valor: "));
const b = parseFloat(prompt("Digite o segundo valor: "));

if (a < b) {
    console.log(`Os valores em ordem crescente são: ${a} e ${b}`);
} else {
    console.log(`Os valores em ordem crescente são: ${b} e ${a}`);
}
