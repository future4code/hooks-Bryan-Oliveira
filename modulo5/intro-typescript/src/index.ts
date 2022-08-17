// dê um npm start para ver as saídas no console

// exercicio 1:

    function checaTriangulo(
        a: number, 
        b: number, 
        c: number) : string {
        if (a !== b && b !== c) return "Escaleno" 
        if (a === b && b === c) return "Equilátero";
        return "Isósceles";
    }

    console.log('exercicio 1',checaTriangulo(2,2,2))

// exercicio 2:

    function imprimeTresCoresFavoritas(): void {
        // cores favoritas:
        const cor1: string = process.argv[2]
        const cor2: string = process.argv[3]
        const cor3: string = process.argv[4]
        console.log('exercicio 2', [cor1, cor2, cor3])
    }

    imprimeTresCoresFavoritas()

// exercicio 3:

    function checaAnoBissexto(ano: number): boolean{
        const cond1 = ano % 400 === 0
        const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
        return cond1 || cond2
    }

    console.log('exercicio 3',checaAnoBissexto(1996))

// exercicio 4:

    function comparaDoisNumeros(
        num1: number, 
        num2: number): number {
        let maiorNumero: number;
        let menorNumero: number;
    
        if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
        } else {
        maiorNumero = num2;
        menorNumero = num1;
        }
    
        const diferenca: number = maiorNumero - menorNumero;
    
        return diferenca 
    }

    console.log('exercicio 4',comparaDoisNumeros(10, 5))

// exercicio 5:

    function checaRenovacaoRG(
        anoAtual: number,
        anoNascimento: number, 
        anoEmissao: number 
        ): string {
        let idade: number = anoAtual - anoNascimento
        let tempoCarteira: number = anoAtual - anoEmissao
    
        if(idade <= 20 ) return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
        if(idade >= 20 || idade <= 50) return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
        if(idade > 50) return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
        return "error"    
    }
    
    console.log('exercicio 5',checaRenovacaoRG(2022, 1999, 2019 ))

    // ---------------desafios---------------

// exercicio 6:

    function comparaDoisNumeros2 (
        num1: number,
        num2: number
        ): void {
            const soma: number = num1 + num2
            const maiorNumero: number  = num1 > num2? num1 : num2
            const diferenca: number = num1 === maiorNumero? num1 - num2 : num2 - num1
            const multiplicacao: number = num1 * num2
            console.log('exercicio 6',`números: ${num1} ${num2}
            soma: ${soma}
            diferença: ${diferenca}
            multiplicacão: ${multiplicacao}
            maior número: ${maiorNumero}`)
        }

        comparaDoisNumeros2(2, 10)

    // exercicio 7:

        function trasicaoRNAParaDNA (sequenciaRNA: string): string {
            const sequenciaRNAArray: Array<string> = sequenciaRNA.split('')
            const baseDNA: string = sequenciaRNAArray
            .map(
                base => {
                    const baseMaisc: string = base.toUpperCase()
                    if(baseMaisc==='A') return 'U'
                    if(baseMaisc==='T') return 'A'
                    if(baseMaisc==='C') return 'G'
                    if(baseMaisc==='G') return 'C'
                }
            )
            .join('')
            return baseDNA 
        }

        console.log('exercicio 7',trasicaoRNAParaDNA("ATTGCTGCGCATTAACGACGCGTA"))

// exercicio 8:

        function reverte(string: string): string {
            return string.split('').reverse().join('')
        }

        console.log('exercicio 8', reverte('abcd'))

// exercicio 9:

        function podeEstudarNaLabenu (
            idade: number,
            ensinoMedio: boolean,
            horasDispo: number,
            curso: string
            ): boolean {
                if(curso=== 'integral') return idade>18 && ensinoMedio && horasDispo>=40  
                if(curso=== 'noturno') return idade>18 && ensinoMedio && horasDispo>=20  
                return false
        }

        console.log('exercicio 9', podeEstudarNaLabenu(22, true, 25, 'noturno'))