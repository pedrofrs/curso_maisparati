const transacoes = [
    { tipo: 'entrada', valor: 1000 },
    { tipo: 'saída', valor: 300 },
    { tipo: 'entrada', valor: 500 },
    { tipo: 'saída', valor: 250 }
  ]
  
function calcularSaldoFinal(transacoes) {
    let saldo = 0;
    transacoes.forEach(transacao => {
      if (transacao.tipo === 'entrada') {
        saldo += transacao.valor;
      } else {
        saldo -= transacao.valor;
      }
    })  
    return saldo;
}
  
const saldoFinal = calcularSaldoFinal(transacoes);
console.log('O saldo final é:', saldoFinal);