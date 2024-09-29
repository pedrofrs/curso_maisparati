const empresa = {
    nome: 'Minha Empresa',
    departamentos: [
      {
        nome: 'Marketing',
        funcionarios: ['Pedro', 'Laura', 'Natalia']
      },
      {
        nome: 'Tecnologia',
        funcionarios: ['Ana', 'Luiz', 'Camila']
      },
      {
        nome: 'Vendas',
        funcionarios: ['Pablo', 'Carla']
      }
    ]
}
  
for (const departamento in empresa.departamentos) {
    console.log(`Departamento: ${empresa.departamentos[departamento].nome}`)
  
    for (const funcionario of empresa.departamentos[departamento].funcionarios) {
      console.log(`Funcionário: ${funcionario}`)
    }
}