/* EXERCÍCIOS DE INTERPRETAÇÃO:

1)
a) será exibido o o elemnto, sua posição e o array, isso para cada item dentro do array

2)
a) a propriedade nome de cada objeto dentro do array

3)
a) os objetos dentro do array cuja propriedade apelido seja diferente de "chijo" */

//EXERCÍCIOS DE CÓDIGO:

//1)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a)
 const nomePets = pets.map(pet =>{
    return pet.nome
    }
 )

 console.log(nomePets)

 //b)
 const petsSalsicha = pets.filter(pet =>{
    return pet.raca === "Salsicha"
    }
 )

 console.log(petsSalsicha)

 //c)
 const petsPoodle = pets.filter(pet =>{
    return pet.raca === "Poodle"
    }
 )

 const mensagem = petsPoodle.map(pet =>{
     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`
 })

 console.log(mensagem)

 //2)
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a)
 const nomeProdutos = produtos.map(produto =>{
    return produto.nome
    }
 )

 console.log(nomeProdutos)

 //b)
 const produtosComDesconto = produtos.map(produto =>{
    produto.preco = (produto.preco * 0.95)
    return produto
    }
 )

 console.log(produtosComDesconto)

 //c)
 const produtosBebida = produtos.filter(produto =>{
    return produto.categoria === "Bebidas"
    }
 )

 console.log(produtosBebida)

 //d)
 const produtosYpe = produtos.filter(produto =>{
    return produto.nome.includes("Ypê")
    }
 )

 console.log(produtosYpe)

 //e)
 const produtosYpeMensagem = produtosYpe.map(produto =>{
    return `Compre ${produto.nome} por ${produto.preco}`
    }
 )

 console.log(produtosYpeMensagem)

 //DESAFIOS:

 //1)
 const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //a)
 const nomePokemons = pokemons.map(poke =>{
     return poke.nome
 })

 const pokemonsEmOrdemAlfabetica = nomePokemons.sort()

 console.log(pokemonsEmOrdemAlfabetica)

 //b)
 const tiposPokemon = pokemons.map(poke =>{
     return poke.tipo
 })

let tipos = [tiposPokemon[0]]

 for(let i=0; i<tiposPokemon.length; i++){
     let contador = 0 
    for(let c=0; c<tipos.length;c++){
        if(tipos[c] === tiposPokemon[i]){
             contador++
         }
     }
     if(contador < 1){
         tipos.push(tiposPokemon[i])
     }
 }

 console.log(tipos)