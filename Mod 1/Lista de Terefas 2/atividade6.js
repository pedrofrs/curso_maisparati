const funcionarios = [
    { nome: 'Pedro', cargo: 'Desenvolvedor', salario: 5000 },
    { nome: 'Laura', cargo: 'Analista', salario: 4000 },
    { nome: 'Carla', cargo: 'Gerente', salario: 7000 },
    { nome: 'Paulo', cargo: 'Estagiário', salario: 1400 }
];

const salarioFiltro = 4000;

for (const funcionario of funcionarios) {
    if (funcionario.salario > salarioFiltro) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$ ${funcionario.salario}`)
    }
}
