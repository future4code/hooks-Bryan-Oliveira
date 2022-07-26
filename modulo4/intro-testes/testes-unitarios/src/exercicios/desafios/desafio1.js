export const ordenaNumeros = (array)=>{
    const numerosOrdenados = array.sort((a,b)=>{
        return a - b
    })
    return numerosOrdenados
}