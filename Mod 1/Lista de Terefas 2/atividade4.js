let pessoas = [
    {nome : "Pedro", idade : 25, cidade : "Jabotao dos Guararapes"},
    {nome : "Laura", idade : 25, cidade : "Paulista"},
    {nome : "Natalia", idade : 28, cidade : "Olinda"},
    {nome : "Lucas", idade : 15, cidade : "Recife"}
]

var i = 1;
for(let pessoa of pessoas){
    console.log(`${i} - Nome: ${pessoa.nome}; Idade: ${pessoa.idade}; Cidade: ${pessoa.cidade}`)
    i++
}
