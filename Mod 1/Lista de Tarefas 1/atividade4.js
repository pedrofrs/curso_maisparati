const prompt = require('prompt-sync')()

const opcao = parseInt(prompt("Escolha uma opção:"))

switch (opcao) {
    case '1':
        console.log("Você selecionou a Opção 1.")
        break
    case '2':
        console.log("Você selecionou a Opção 2.")
        break
    case '3':
        console.log("Você selecionou a Opção 3.")
        break
    case '4':
        console.log("Você selecionou a Opção 4.")
        break
    case '5':
        console.log("Você selecionou a Opção 5.")
        break
    case '0':
        console.log("Saindo...");
        break
    default:
        console.log("Opção inválida. Tente novamente.")
}
