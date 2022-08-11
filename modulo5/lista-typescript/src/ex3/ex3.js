// exercicio 3:
var movies = function (name, year, genrer, rate) {
    var GENERO = {
        ACAO: "ação",
        DRAMA: "drama",
        COMEDIA: "comédia",
        ROMANCE: "romance",
        TERROR: "terror"
    };
    return rate ?
        { nome: name, anoLancamento: year, genero: genrer, pontuacao: rate }
        :
            { nome: name, anoLancamento: year, genero: genrer };
};
