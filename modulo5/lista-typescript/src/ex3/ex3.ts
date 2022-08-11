// exercicio 3:

const movies = (
    name: string,
    year: number, 
    genrer: string, 
    rate?: number): object => {
    const GENERO = {
        ACAO:"ação",
        DRAMA:"drama",
        COMEDIA:"comédia",
        ROMANCE:"romance",
        TERROR:"terror"
    }

    return rate? 
    {nome: name, anoLancamento: year, genero: genrer, pontuacao: rate} 
    :
    {nome: name, anoLancamento: year, genero: genrer}
}