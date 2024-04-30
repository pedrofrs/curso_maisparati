const prompt = require('prompt-sync')();

const nota1 = parseFloat(prompt("Digite a nota da primeira avaliação: "));
const nota2 = parseFloat(prompt("Digite a nota da segunda avaliação: "));

const media = (nota1 + nota2) / 2;

console.log(`Média semestral: ${media.toFixed(2)}`);

if (media >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado.");
} else {
    console.log("Você foi REPROVADO! Estude mais.");
}
