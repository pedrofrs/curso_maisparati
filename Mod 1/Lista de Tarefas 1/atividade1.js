const prompt = require('prompt-sync')()

const numero = parseInt(prompt("Digite um número inteiro: "))

if (numero % 2 == 0){
    console.log("PAR!")
}
else{
    console.log("IMPAR!")
}