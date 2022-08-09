// exercício 1:

    const returnBornDate = (name, bornDate) =>{
        const splitedDate = bornDate.split('/')

        const day = splitedDate[0]
        const month = Number(splitedDate[1])
        const year = splitedDate[2]

        const dateIncorrectFormat = `passe a data no formato correto (dd/mm/aaaa)`
        const correctPhrase = `"Olá me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}"`

        if(day>31 || !month || month>12 || year.length!==4) return `${dateIncorrectFormat}`
        return `${correctPhrase}`
    }

    module.exports = returnBornDate;

