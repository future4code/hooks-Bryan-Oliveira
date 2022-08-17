const anagrans = require('./desafio3.js')

describe('number of anagrans', ()=>{
    test('passing a string with repited letter it should return "passe uma palavra sem letras repetidas"',()=>{
        expect(anagrans('ana')).toBe("passe uma palavra sem letras repetidas")
        expect(anagrans('banana')).toBe("passe uma palavra sem letras repetidas")
        expect(anagrans('teste')).toBe("passe uma palavra sem letras repetidas")
    })
    test('passing "coragem" it should return 5040',()=>{
        expect(anagrans('coragem')).toBe(5040)
    })
})

