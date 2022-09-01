export type NewUSer = {
    name: string,
    cpf: string,
    birthDate: string
}

export type Spent = {
    spending: {
    value: number,
    date: string,
    description: string
}[]}


export type User = NewUSer & Spent & { balance: number}

const user1: User = {
    name: 'bryan',
    cpf: '',
    birthDate: '',
    spending: [],
    balance: 0
}