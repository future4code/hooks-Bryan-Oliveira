//  pre-historia 100000AC - 4001AC 
// 4000AC - 475DC Idade Antiga
// 476 - 1452 Idade Média
// 1453 - 1788 Idade Moderna
// 1789 - atualidade

function determinaIdade (ano: number , sigla?: string ): string {
    //@ts-ignore
    if(!sigla || sigla.toUpperCase === 'DC') return ano >= 1789? 'Idade Conteporanea':
     1789>ano && ano>=1453? 'Idade Moderna' :  
     1453>ano && ano>=476? 'Idade Media': 'Idade Antiga'

    return ano>=4001? 'pre-historia': 'Idade Antiga'
}

console.log(determinaIdade(1))              //idade antiga
console.log(determinaIdade(476))            //idade media
console.log(determinaIdade(1453))           //idade moderna
console.log(determinaIdade(2022))           //idade conteporanea
console.log(determinaIdade(2000, 'ac'))     //idade antiga
console.log(determinaIdade(10000, 'ac'))    //pre-historia