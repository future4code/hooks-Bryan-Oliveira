// a)
const minhaString: string = 'string'

// b)
const meuNumero: number | string = 5

// c)
enum coresArcoIris {
    AZUL= "azul",
    VERMELHO = "vermelho",
    VERDE = "verde",
    AMARELO = "amarelo",
    LARANJA = "laranja",
    AZUL_ESCURO = "azul-escuro",
    VIOLETA = "violeta"
}   

type Pessoa  = {
    nome: string,
    idade: number,
    corFav: coresArcoIris
}

const pessoa1: Pessoa = {
    nome: "joáo",
    idade: 21,
    corFav: coresArcoIris.AZUL
}
const pessoa2: Pessoa = {
    nome: "bryan",
    idade: 22,
    corFav: coresArcoIris.VERMELHO
}
const pessoa3: Pessoa = {
    nome: "luciano",
    idade: 20,
    corFav: coresArcoIris.AZUL_ESCURO
}

