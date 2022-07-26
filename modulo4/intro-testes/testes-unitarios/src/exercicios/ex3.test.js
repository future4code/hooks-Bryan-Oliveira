import { isExportDeclaration } from "typescript";
import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test('retorna true para array com números repetidos =>[2,2,5]', ()=>{
        const result = checaItensDuplicados([2,2,5])
        expect(result).toEqual(true)
    })
    test('retorna true para array com números repetidos em formato de string =>["2","2","5"]', ()=>{
        const result = checaItensDuplicados(['2','2','5'])
        expect(result).toEqual(true)
    })
    test('retorna true para array com letras repetidas =>["a", "a", "b", "c"]', ()=>{
        const result = checaItensDuplicados(["a", "a", "b", "c"])
        expect(result).toEqual(true)
    })
    test("retorna false para array com números diferentes => [1,2,3]", ()=>{
        const result = checaItensDuplicados([1,2,3])
        expect(result).toEqual(false)
    })
    test('retorna false para array com letras diferentes => ["f", "d", "e"]', ()=>{
        const result = checaItensDuplicados(["f", "d", "e"])
        expect(result).toEqual(false)
    })
    test('retorna false para array vazio => []', ()=>{
        const result = checaItensDuplicados([])
        expect(result).toEqual(false)
    })
    test('retorna true para letras iguais com tamanho diferente => ["f", "d", "e", "F"]', ()=>{
        const result = checaItensDuplicados(["f", "d", "e", "F"])
        expect(result).toEqual(true)
    })
});
