const prompt = require('prompt-sync')();

const a = parseFloat(prompt("Digite o valor do lado A do triângulo: "));
const b = parseFloat(prompt("Digite o valor do lado B do triângulo: "));
const c = parseFloat(prompt("Digite o valor do lado C do triângulo: "));

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log("Triângulo Equilátero");
    } else if (a === b || a === c || b === c) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo.");
}
