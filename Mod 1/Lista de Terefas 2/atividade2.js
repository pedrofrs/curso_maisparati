const prompt = require('prompt-sync')();

let livro = {
    titulo : "Senhor dos Aneis",
    autor : "Tolkien",
    anoPublicacao : 1954,
    genero : "Aventura"
}

if (livro.editora == null){
    livro.editora = prompt("Digite a editora: ")
}
console.log(`A editoria do livro é ${livro.editora}`)