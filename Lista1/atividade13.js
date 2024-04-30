const prompt = require('prompt-sync')();

const n = parseInt(prompt("Digite um número para ver sua tabuada: "));

let i = 1;
while (i <= 10) {
    console.log(`${i} x ${n} = ${i * n}`);
    i++;
}
