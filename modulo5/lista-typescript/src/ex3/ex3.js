// exercicio 3:
var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
var movies = function (name, year, genrer, rate) {
    return rate ?
        { nome: name, anoLancamento: year, genero: genrer, pontuacao: rate }
        :
            { nome: name, anoLancamento: year, genero: genrer };
};
module.exports = { movies: movies, GENERO: GENERO };
