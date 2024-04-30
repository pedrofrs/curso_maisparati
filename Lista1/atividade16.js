function isPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero > 1;
}

let contador = 0;
let numero = 101; // Começando do primeiro número primo após 100

while (contador < 50) {
    if (isPrimo(numero)) {
        console.log(numero);
        contador++;
    }
    numero++;
}
