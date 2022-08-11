// exercicio 4:

    const colaborators = [
        { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
        { nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
        { nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
        { nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
        { nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
        { nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
        { nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
    ]

    const returnMarketing = (array: Array<any>) =>{
        return array.filter(colaborator => colaborator.setor === 'marketing' && colaborator.presencial)
    }

    console.log(returnMarketing(colaborators))
    
    const ExportEx4 = {returnMarketing, colaborators}
    module.exports = ExportEx4;
