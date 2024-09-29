const prompt = require('prompt-sync')();

const peso =  parseFloat(prompt("Qual seu peso?"))
const altura =  parseFloat(prompt("Qual sua altura?"))

const imc = peso / (altura * altura);
let categoria

if (imc < 18.5) {
    categoria = "Baixo peso"
} else if (imc < 24.9) {
    categoria = "Peso normal"
} else if (imc < 29.9) {
    categoria = "Sobrepeso"
} else {
    categoria = "Obesidade"
}

//toFixed = arredondar casas decimais
console.log(`Seu IMC é ${imc.toFixed(2)} e você está na categoria: ${categoria}`)
