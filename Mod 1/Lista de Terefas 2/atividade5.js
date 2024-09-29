const alunos = [
    { nome: 'Alice', nota1: 8.5, nota2: 7.0 },
    { nome: 'Bruno', nota1: 9.0, nota2: 6.5 },
    { nome: 'Carla', nota1: 7.5, nota2: 8.0 },
    { nome: 'Daniel', nota1: 6.0, nota2: 5.5 }
];
let i = 1;
for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2
    console.log(`${i} - Nome: ${aluno.nome}; Média: ${media.toFixed(2)}`)
    i++
}