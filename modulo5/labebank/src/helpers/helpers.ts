import { createAccount } from "..";
import { users } from "../data";

export function howManyYears( day: number, month: number, year: number): number {
    const d = new Date(),
        actualYear = d.getFullYear(),
        actualMonth = d.getMonth() + 1,
        today = d.getDate()

    let years: number = actualYear - year;

    if (actualMonth < month || actualMonth === month && today < day) {
        years--;
    }

    return years < 0 ? 0 : years;
}

export function spliCPF (CPF:string): string[] {
    const arrCPF = CPF.trim().replace('.', '').replace('.', '').replace('-', '').split('')
    return arrCPF
}

export function duplicatedItens(CPF: string): string[] {
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

export function verifyDV (CPF: string): boolean {
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

export function isValidCPF (CPF: string): boolean {
    const arrCPF = spliCPF(CPF)
    
    if(arrCPF.length!==11 || duplicatedItens(CPF).length === arrCPF.length-1) return false
    
    return verifyDV(CPF)
}

export const adjustPrice = (preco: number) => {
	const valorAjustado = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}


export function clearDataBase(): void {
    users.splice(0, users.length)
}

export function seedDataBase(): void {
    const newUser1 = {name: "Bryan", cpf:  "145.382.206-20", birthDate: "23/12/1999", balance: 0, spending: []}
    const newUser2 = {name: "Miguel", cpf:  "653.266.811-70", birthDate: "23/12/1999", balance: 500, spending: []}
    const newUser3 = {name: "Maria", cpf:  "459.485.555-50", birthDate: "23/12/1999", balance: 300, spending: []}

    users.push(newUser1)
    users.push(newUser2)
    users.push(newUser3)
}