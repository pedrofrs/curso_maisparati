const filmes = [
    { titulo: 'Inception', diretor: 'Christopher Nolan', anoLancamento: 2010 },
    { titulo: 'The Matrix', diretor: 'Lana Wachowski, Lilly Wachowski', anoLancamento: 1999 },
    { titulo: 'Interstellar', diretor: 'Christopher Nolan', anoLancamento: 2014 },
    { titulo: 'Parasite', diretor: 'Bong Joon-ho', anoLancamento: 2019 }
]

function listaTitulos (filmes){
    const titulosFilmes = [];
    filmes.forEach(filme => {
        titulosFilmes.push(filme.titulo);
    });
    return titulosFilmes;
}

let titulosFiltrados = listaTitulos(filmes)
console.log(`Os titulos são: \n` + titulosFiltrados)