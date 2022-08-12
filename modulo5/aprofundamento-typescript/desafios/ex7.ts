enum classificacao {
    VERAO = "verao",
    INVERNO = "inverno",
    BANHO = "banho",
    INTIMA = "intima"
}

const desconto = {
    verao: 0.05,    //5%
    inverno: 0.1,   //10%
    banho: 0.04,    //4%
    intima: 0.07,   //7%
}

type Produto = {
    nome: string,
    preco: number,
    classificacao: classificacao,
}

function aplicaDesconto (produto: Produto): Produto {
    const produtoAux = {...produto, preco: produto.preco - (produto.preco * desconto[produto.classificacao]) }
    return produtoAux
}

function informaPrecoFinal (produtos: Produto[]): Produto[] {
    return produtos.map(aplicaDesconto)
}

const produtos = [
    {nome: 'casaco', preco: 10, classificacao: classificacao.INVERNO},
    {nome: 'sunga', preco: 10, classificacao: classificacao.BANHO},
    {nome: 'camisa regata', preco: 10, classificacao: classificacao.VERAO},
    {nome: 'sutiã', preco: 10, classificacao: classificacao.INTIMA},
]

console.log(informaPrecoFinal(produtos))