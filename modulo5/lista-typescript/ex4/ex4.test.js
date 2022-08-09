const Export = require("./ex4.js")

const {returnMarketing, colaborators} = Export

describe('it should return marketing people who works presencialy', () =>{
    test('it should return "marcos" and "paola"',()=>{
        expect(returnMarketing(colaborators)).toHaveLength(2)
    })
})