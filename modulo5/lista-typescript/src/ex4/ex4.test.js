const ExportEx4 = require("./ex4.js")

const {returnMarketing, colaborators} = ExportEx4

describe('it should return marketing people who works presencialy', () =>{
    test('it should return "marcos" and "paola"',()=>{
        expect(returnMarketing(colaborators)).toHaveLength(2)
    })
})