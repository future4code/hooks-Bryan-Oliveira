// exercício 1:

// a) Conseguimos acessar parâmetros passados pelo terminal através do "process.argv"

// b)

    // const entreredName = process.argv[2]
    // const entreredAge = Number(process.argv[3])

    // console.log(`"Olá, ${entreredName}! Você tem ${entreredAge} anos. Em sete anos você terá ${entreredAge + 7}"`)

// exercício 2:

//     const operation = process.argv[2]
//     const num1 = Number(process.argv[3])
//     const num2 = Number(process.argv[4])
//     let result = null

//     switch (operation) {
//         case 'add':
//             result = num1 + num2
//             break;
//         case 'sub': 
//             result = num1 - num2
//             break
//         case 'mult': 
//             result = num1 * num2
//             break
//         case 'div': 
//             result = num1 / num2
//             break
//         default:
//             result = 'passe o primeiro argumento como sendo uma das seguintes opções: "add", "sub", "mult", "div"'
//             break;
//     }

//     console.log(result)

// exercício 3:

    // const toDo = [
    //     "Lavar a louça",
    //     "Comprar Leite"
    // ]

    // const newTask = process.argv[2]
    // toDo.push(newTask)
    // console.log('Tarefa adicionada com sucesso!')
    // console.table(toDo)

// exercício 4:

