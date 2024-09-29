let pessoas = [
    {nome : "Pedro", idade : 25, cidade : "Jabotao dos Guararapes"},
    {nome : "Laura", idade : 25, cidade : "Paulista"},
    {nome : "Natalia", idade : 28, cidade : "Olinda"},
    {nome : "Lucas", idade : 85, cidade : "Recife"}
]

function filtroIdade(pessoas, limiteIdade){
    let pessoasPorIdade = []
    pessoas.forEach(pessoa => {
        if (pessoa.idade > limiteIdade){
            pessoasPorIdade.push(pessoa)
        }
        
    });
    return pessoasPorIdade.length
}

let numeroPessoasPorLimiteIdade = filtroIdade(pessoas, 30)
console.log(`O número de pessoas com mais de 30 anos é: ${numeroPessoasPorLimiteIdade}`)