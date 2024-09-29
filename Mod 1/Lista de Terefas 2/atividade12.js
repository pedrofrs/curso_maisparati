
let estoque = [
    { produto: 'Camiseta', quantidade: 10, minimo: 15 },
    { produto: 'Calça', quantidade: 20, minimo: 25 },
    { produto: 'Tênis', quantidade: 5, minimo: 10 },
  ]
  
  function atualizarEstoque(produtos) {
    let novoEstoque = []
    produtos.forEach(produto => {
      if (produto.quantidade < produto.minimo) {
        produto.quantidade *= 2; 
      }
      novoEstoque.push(produto)
    })
    return novoEstoque
  }
  
let novoEstoque = atualizarEstoque(estoque)
console.log(`O estoque atualizado é:`)
console.log(novoEstoque)