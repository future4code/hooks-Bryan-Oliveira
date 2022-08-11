const adjustPrice = (preco: number) => {
	const valorAjustado = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const inventory = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const sorByQuantity = (a: {nome: string, quantidade: number, valorUnitario: number},
	b: {nome: string, quantidade: number, valorUnitario: number}) => a.quantidade-b.quantidade

const adjustInventory = (array: any) => {
	return array
	.map((item: {nome: string, quantidade: number, valorUnitario: number}) => { return { ...item, valorUnitario: adjustPrice(item.valorUnitario)}})
	// @ts-ignore
	.sort(sorByQuantity)
}

// console.log(adjustInventory(inventory))

const ExportDs1 = {
	adjustPrice, inventory, adjustInventory, sorByQuantity
}

module.exports = ExportDs1