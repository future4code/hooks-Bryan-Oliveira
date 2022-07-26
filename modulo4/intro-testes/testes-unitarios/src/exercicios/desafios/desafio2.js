export const primeiraLetraParaMaiusculo = (frase)=>{
    const palavras = frase.split(' ')
    const fraseComPrimeiraLEtraMaiuscula = palavras.map(palavra => {
        const letras = palavra.split('')
        const letraMaiuscula = letras.shift().toUpperCase()
        letras.unshift(letraMaiuscula) 
        return letras.join('')
    })
    .join(' ')
    return fraseComPrimeiraLEtraMaiuscula
}