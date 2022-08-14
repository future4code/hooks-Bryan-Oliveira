// exercicio 3:
enum GENERO  {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type movie = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,

}

type rate = {
    pontuacao: number
}

const movies = (
    name: string,
    year: number, 
    genrer: GENERO, 
    rate?: number): movie | (movie & rate) => {
    

    return rate? 
    {nome: name, anoLancamento: year, genero: genrer, pontuacao: rate} 
    :
    {nome: name, anoLancamento: year, genero: genrer}
}

module.exports = {movies, GENERO }