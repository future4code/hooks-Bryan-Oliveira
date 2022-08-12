// exercicio 6:
type Custormer = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const customers: Custormer[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function updateDebts (customer: Custormer) {
    const debito: number = customer.debitos.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    return { ...customer, saldoTotal: debito? customer.saldoTotal - debito : customer.saldoTotal, debitos: []}
}

const returnNegativeBalance = (array: Custormer[]) => {
    return array.map(updateDebts).filter( (customer) => customer.saldoTotal < 0)
}

const ExportEx6 = { updateDebts, returnNegativeBalance, customers}
module.exports = ExportEx6