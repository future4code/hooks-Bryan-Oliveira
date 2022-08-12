type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) depois de configurar o tsconfig.json usaria o comando tsc no terminal
// c) tem que especificar no tsconfig a pasta que ele vai buscar os arquivos para transpilar, no caso seria o "src"
// d) usando o comando tsc sem parâmetros ele "transpila" todo arquivo .ts que encontrar