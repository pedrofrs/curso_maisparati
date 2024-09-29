const pedidos = [
    { cliente: 'Alice', produto: 'Produto A', quantidade: 3 },
    { cliente: 'Bruno', produto: 'Produto B', quantidade: 2 },
    { cliente: 'Alice', produto: 'Produto C', quantidade: 1 },
    { cliente: 'Daniel', produto: 'Produto A', quantidade: 4 },
    { cliente: 'Bruno', produto: 'Produto C', quantidade: 3 }
]

function agruparQuantidadePorCliente(pedidos) {
    const totalPorCliente = {}

    pedidos.forEach(pedido => {
        if (!totalPorCliente[pedido.cliente]) {
            totalPorCliente[pedido.cliente] = 0
        }
        totalPorCliente[pedido.cliente] += pedido.quantidade;
    })

    return totalPorCliente;
}

const totalPorCliente = agruparQuantidadePorCliente(pedidos)

console.log(totalPorCliente)