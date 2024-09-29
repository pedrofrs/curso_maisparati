let carrinho = {
    comprador: "Pedro Vitor",
    itens: [
      { nome: 'Camiseta', quantidade: 2, preco: 29.99 },
      { nome: 'Calça', quantidade: 1, preco: 89.90 },
      { nome: 'Tênis', quantidade: 3, preco: 129.99 }
    ]
  }
  
function calcularValorTotal(carrinho) {
let valorTotal = 0;

carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.preco;
    })
 return valorTotal;
}
  
const total = calcularValorTotal(carrinho)
console.log('O valor total do carrinho é:', total.toFixed(2))