const prompt = require('prompt-sync')();


const A = parseInt(prompt("Qual o tamanho do lado A?"))
const B = parseInt(prompt("Qual o tamanho do lado B?"))
const C = parseInt(prompt("Qual o tamanho do lado C?"))

if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
        console.log("Triângulo equilátero");
    } else if (A === B || A === C || B === C) {
        console.log("Triângulo isósceles")
    } else {
        console.log("Triângulo escaleno")
    }
} else {
    console.log("Os lados não formam um triângulo.");
}