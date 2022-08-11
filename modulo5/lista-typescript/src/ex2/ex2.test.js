const whatTypeIs = require("./ex2.js")

describe("passing a param it console.log the type of param",()=>{
    
    test("passing number it should console.log 'number'", ()=>{
        
        let logSpy = jest.spyOn(console, 'log');
        whatTypeIs(2)
        expect(logSpy).toHaveBeenCalledWith('number');
        
        whatTypeIs(-5)
        expect(logSpy).toHaveBeenCalledWith('number');
        
        whatTypeIs(10)
        expect(logSpy).toHaveBeenCalledWith('number');
        
        whatTypeIs(0)
        expect(logSpy).toHaveBeenCalledWith('number');

    })

    test("passing string it should console.log 'string'", () => {
        
        let logSpy = jest.spyOn(console, 'log');

        whatTypeIs("teste")
        expect(logSpy).toHaveBeenCalledWith('string');

        whatTypeIs("2")
        expect(logSpy).toHaveBeenCalledWith('string');
    })

    test("passing boolean it should console.log 'boolean'", () => {
        
        let logSpy = jest.spyOn(console, 'log');

        whatTypeIs(true)
        expect(logSpy).toHaveBeenCalledWith('boolean');

        whatTypeIs(false)
        expect(logSpy).toHaveBeenCalledWith('boolean');
    })

    test("passing object it should console.log 'object'", () => {
        
        let logSpy = jest.spyOn(console, 'log');

        whatTypeIs({test: ""})
        expect(logSpy).toHaveBeenCalledWith('object');
    })

    test("passing array it should console.log 'array'", () => {
        
        let logSpy = jest.spyOn(console, 'log');

        whatTypeIs([1, 2])
        expect(logSpy).toHaveBeenCalledWith('array');
    })
})