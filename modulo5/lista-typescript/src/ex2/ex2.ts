// exercicio 2:
const toType = function(obj: any): string {
    // @ts-ignore
        return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }

const whatTypeIs = (param: any): void => {
    console.log(toType(param))
}

// console.log(toType([1,2,3]))
module.exports = whatTypeIs;