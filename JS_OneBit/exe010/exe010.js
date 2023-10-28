const lista = []
let opc = ''

do{
    opc = prompt(
        `Cadastros realizados --> ${lista.length}\n`
        +'\nEscolha uma opção:'
        +'\n1 - Cadastrar imóvel'
        +'\n2 - Lista de cadastro'
        +'\n3 - Sair'
    )
    if(opc == 1){
        const casa = {}
        casa.proprietario = prompt('Nome do proprietario:')
        casa.quartos = prompt('Quantos quartos o imóvel possui?')
        casa.banheiros = prompt('Quantos banheiros o imóvel possui?')
        casa.garagem = prompt('O imóvel possui garagem?\n(SIM/NÃO)')
        let conf = window.prompt(
            `Nome: ${casa.proprietario}`
            +`\nNúmero de quartos: ${casa.quartos}`
            +`\nNúmero de quartos: ${casa.banheiros}`
            +`\nPossui garagem: ${casa.garagem}`
            +'\nDESEJA SALVAR AS SEGUINTES INFORMÇÔES?'
            +'\n1 - SIM'
            +'\n2 - NÃO')
        if(conf == 1){
            lista.push(casa)
        }else if(conf >= 3){
            alert('ERRO!!! Digite uma opção valida.')
        }    
    }else if(opc == 2){
        for(let c = 0; c < lista.length; c++){
            alert(`${c + 1} Imóvel - Proprietario: ${lista[c].proprietario}
            \nQuartos:${lista[c].quartos}
            \nBanheiros:${lista[c].banheiros}
            \nGaragem:${lista[c].garagem}`)
        }
        window.co(tela)
    }else if(opc >= 4 || opc <= 0){
        alert('ERRO!!! Digite uma opção valida')
    }else if(opc == 3){
        break
    }
}while(opc != 3)