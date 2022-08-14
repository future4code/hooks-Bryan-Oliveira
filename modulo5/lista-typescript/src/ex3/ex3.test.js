const {movies,  GENERO} = require("./ex3.js")

describe('it slhould return an object with movie infos', ()=>{
    test('passing all infos it should return "{nome: "Duna", anoLancamento: 2021, genero: "ação", pontuacao: 74}"', ()=>{
        // const correctInfos = {}
        const expectedReturn = {nome: "Duna", anoLancamento: 2021, genero: "ação", pontuacao: 74}

        expect(movies("Duna", 2021, GENERO.ACAO, 74)).toEqual(expect.objectContaining(expectedReturn))
    })
    test('passing only necessary infos it should return "{nome: "Duna", anoLancamento: 2021, genero: "ação"}"',()=>{
        const expectedReturn = {nome: "Duna", anoLancamento: 2021, genero: "ação"}

        expect(movies("Duna", 2021, GENERO.ACAO)).toEqual(expect.objectContaining(expectedReturn))
    })
})