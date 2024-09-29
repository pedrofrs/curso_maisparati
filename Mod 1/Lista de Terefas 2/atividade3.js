function filtroPropriedade (produto, valor){
    let produtoFiltrado = {}
    for (let propriedade in produto ){
        if(produto.hasOwnProperty(propriedade) && produto[propriedade] > valor){
            produtoFiltrado[propriedade] = produto[propriedade]
        }
    }
    return produtoFiltrado
}


let produto = {
    nome : "Iphone",
    telaPolegadas : 8,
    bateriamAh : 3000,
    anoFabricacao : 2024,
    preco : 9000.67

}

console.log(filtroPropriedade(produto, 300))
