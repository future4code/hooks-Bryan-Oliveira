import { primeiraLetraParaMaiusculo } from './desafio2'

describe('retorna a primeira letra de cada palavra em maiúsculo',()=>{
    test('retorna true para entrada="ola" saida="Ola"', ()=>{
        const result = primeiraLetraParaMaiusculo("ola")
        expect(result).toEqual("Ola")
    })
    test('retorna true para entrada="ola, mundo" saida="Ola, Mundo"', ()=>{
        const result = primeiraLetraParaMaiusculo("ola, mundo")
        expect(result).toEqual("Ola, Mundo")
    })
    test('retorna true para entrada="eu sou o bob, aluno da labenu" saida="Eu Sou O Bob, Aluno Da Labenu"', ()=>{
        const result = primeiraLetraParaMaiusculo("eu sou o bob, aluno da labenu")
        expect(result).toEqual("Eu Sou O Bob, Aluno Da Labenu")
    })
})