type Item = {
	nome: string,
	quantidade: number,
	valorUnitario: number | string
}

const adjustPrice = (preco: number) => {
	const valorAjustado = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const inventory: Item[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const sorByQuantity = (a: Item,b: Item) => a.quantidade-b.quantidade

const adjustInventory = (array: Item[]) => {
	return array
	.map((item) => { return { ...item, valorUnitario: adjustPrice(item.valorUnitario as number)}})
	.sort(sorByQuantity)
}

const ExportDs1 = {
	adjustPrice, inventory, adjustInventory, sorByQuantity
}

module.exports = ExportDs1