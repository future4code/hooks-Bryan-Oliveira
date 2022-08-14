function spliCPF (CPF:string) {
    const arrCPF = CPF.trim().replace('.', '').replace('.', '').replace('-', '').split('')
    return arrCPF
}

function duplicatedItens(CPF: string): string[] {
    const itens: string[] = spliCPF(CPF)
    const duplicatedItens = []
    for(let a: number = 0; a<itens.length; a++){
        for(let i:number = 0; i<itens.length; i++){
            const prevItem = itens[a]
            if(i !== a && i > a) {
                const postItem = itens[i]
                if(prevItem === postItem){
                     duplicatedItens.push(prevItem)
                     break
                }
            } 
        }
    }
    return duplicatedItens
}

function verifyDV (CPF: string): boolean {
    const arrCPF = spliCPF(CPF)
    let sum: number = 0
    const arrayDVMultiplicators = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
    
    for(let i: number = 0; i<9; i++){
        sum += Number(arrCPF[i]) * arrayDVMultiplicators[i + 1] 
    }

    const firstDV:number = (11 - (sum % 11))>=10? 0 : 11 - (sum % 11)

    sum = 0
    
    for(let i: number = 0; i<10; i++){
        sum += Number(arrCPF[i]) * arrayDVMultiplicators[i] 
    }
    
    const secondDV:number = (11 - (sum % 11))>=10? 0 : 11 - (sum % 11)
    
    return (Number(arrCPF[9])!== firstDV || Number(arrCPF[10])!== secondDV)? false : true
}

function isValidCPF (CPF: string): boolean {
    const arrCPF = spliCPF(CPF)
    
    if(arrCPF.length!==11 || duplicatedItens(CPF).length === arrCPF.length-1) return false
    
    return verifyDV(CPF)
}


module.exports = {isValidCPF, verifyDV, duplicatedItens, spliCPF}

