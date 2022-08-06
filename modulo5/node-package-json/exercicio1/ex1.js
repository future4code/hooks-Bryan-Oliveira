import { error, result } from "../colors/colors.js"

// exercício 1:

// a) Conseguimos acessar parâmetros passados pelo terminal através do "process.argv"

// b)

    const entreredName = process.argv[2]
    const entreredAge = Number(process.argv[3])

    const IncorrectEntriesmessage = `${error} não foram passados dois parâmetos ou foram passados valores incorretos, o primeiro valor deve ser uma string e o segundo deve ser do tipo number`
    
    const phrase = ()=>{
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        const teste = entreredName && numbers.filter(num => entreredName.includes(num))
        if((!(entreredName && entreredAge)) || teste?.length) return IncorrectEntriesmessage
        return `${result} "Olá, ${entreredName}! Você tem ${entreredAge} anos. Em sete anos você terá ${entreredAge + 7}"`
    }

    console.log(phrase())