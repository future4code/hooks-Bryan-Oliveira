// exercicio 6:

    const customers = [
        { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, debitos: [] }
    ]

    const updateDebts = (customer) => {
        const debito = customer.debitos.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        return { ...customer, saldoTotal: debito? customer.saldoTotal - debito : customer.saldoTotal, debitos: []}
    }
    const returnNegativeBalance = (array) => {
        return array.map(updateDebts).filter( customer => customer.saldoTotal < 0)
    }


    const Export = { updateDebts, returnNegativeBalance, customers}
    module.exports = Export