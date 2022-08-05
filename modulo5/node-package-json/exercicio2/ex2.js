import { error, result } from "../colors/colors.js"

// exercício 2:

    // operation entries
    const operation = process.argv[2]
    const num1 = Number(process.argv[3])
    const num2 = Number(process.argv[4])

    // error messages 
    const NaNMessage = `${error} o terceiro e quarto argumento devem ser números`
    const NotCorrectOperatorMessage = `${error} passe o primeiro argumento como sendo uma das seguintes opções: "add", "sub", "mult", "div`

    const doOperation = () => {
        if(!(num1 && num2)) return NaNMessage

            switch (operation) {
                case 'add':
                    return `${result} resultado: ${num1 + num2}`
                case 'sub': 
                    return `${result} resultado: ${num1 - num2}`
                case 'mult': 
                    return `${result} resultado: ${num1 * num2}`
                case 'div': 
                    return `${result} resultado: ${num1 / num2}`
                default:
                    return NotCorrectOperatorMessage
        }
    }

    console.log(doOperation())