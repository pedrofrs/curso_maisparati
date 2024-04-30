const prompt = require('prompt-sync')();

const celsius = parseFloat(prompt("Digite a temperatura em graus Celsius: "));
const fahrenheit = (celsius * 9/5) + 32;

console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}°F`);
