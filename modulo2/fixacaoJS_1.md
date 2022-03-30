```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
const salarioFixo = 2000
  const comissao = 100
  const taxaCmossao = 0.05
   
  const salario = salarioFixo + (comissao * qtdeCarrosVendidos)+ (valorTotalVendas* taxaCmossao)
  return salario
}```