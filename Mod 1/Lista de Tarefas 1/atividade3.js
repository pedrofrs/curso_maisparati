const prompt = require('prompt-sync')()

const nota = parseInt(prompt("Quanto foi usa nota?"))

if (nota >= 7){
    console.log("APROVADO")
}
else if (nota < 3){
     console.log("RECUPERAÇÃO")
}
else if (nota > 3){
    console.log("RECUPERAÇÃO")
}