/*exercicios de interpretação:
1)
    10
    10  5

2)
    10  10  10

3)
    let horasTrabalhadasPorDia
    let salarioPorDia

    "o programa recebe os parâmetros de horas trabalhadas em cada dia e o salário diário, após isso retorna o valor do salário por hora"*/

//exercícios de código:
//1)
    let nome;
    let idade;
    alert(typeof nome + " " + typeof idade);
    
    //foi impresso undefined, pois não foi atribuido nenhum valor às variáveis

    nome = prompt("insira seu nome");
    idade = prompt("insira sua idade");
    alert(typeof nome + " " +  typeof idade);

    //foi impresso string, pois o prompt sempre recebe nesse tipo

    alert("olá "+  nome + " você tem " + idade + " anos");

//2)
    let pergunta1 = "você tem irmâo(s)?"
    let pergunta2 = "você é paulista?"
    let pergunta3 = "você gosta de açaí?"

    let resposta1 = prompt(`${pergunta1}`);           
    let resposta2 = prompt(`${pergunta2}`);
    let resposta3 = prompt(`${pergunta3}`);

    alert(`${pergunta1} = ${resposta1}`);
    alert(`${pergunta2} = ${resposta2}`);
    alert(`${pergunta3} = ${resposta3}`);

//3)
    let a = 10;
    let b = 25;
    let troca;

    troca = a
    a = b
    b = troca

    console.log("o novo valor de a é: ", a)
    console.log("o novo valor de b é: ", b) 

//desafio:
    let numero1 = parseFloat(prompt("digite um número")) 
    let numero2 = parseFloat(prompt("digite um número"))

    let x = numero1 + numero2
    let y = numero1 * numero2

    console.log(x, y)
