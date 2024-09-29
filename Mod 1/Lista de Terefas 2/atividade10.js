const vendas = [
    { produto: 'Produto A', quantidade: 3, valor: 50 },
    { produto: 'Produto B', quantidade: 2, valor: 30 },
    { produto: 'Produto C', quantidade: 5, valor: 20 },
    { produto: 'Produto D', quantidade: 1, valor: 100 }
];

function calcularValorTotalVendas(vendas) {
    let valorTotalVendas = 0;

    vendas.forEach(venda => {
        valorTotalVendas += venda.quantidade * venda.valor;
    });

    return valorTotalVendas;
}

const totalVendas = calcularValorTotalVendas(vendas);
console.log(`Valor Total de Vendas: R$ ${totalVendas.toFixed(2)}`)