const produtos = [
    { nome: 'Produto A', preco: 1000},
    { nome: 'Produto B', preco: 2000},
    { nome: 'Produto C', preco: 1500 },
    { nome: 'Produto D', preco: 807.89,}
]

function aplicarDesconto (produtos, desconto){
    produtos.forEach(produto => {
        let novoPreco = produto.preco - (produto.preco*desconto)
        produto.preco = novoPreco 

    })
    return produtos
}
//Desconto de 10%
let produtosComDesconto = aplicarDesconto(produtos, 0.1)
console.log(`Aqui está são os novos objetos com o desconto aplicados: `)
console.log(produtosComDesconto)