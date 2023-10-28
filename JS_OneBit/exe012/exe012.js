let lista = []
let opc = ''

do { 
    opc = parseInt(prompt('BATERIAS MOURA - SELEÇÃO DE VAGAS'
    +'\n1 - Listar Vagas'
    +'\n2 - Visualizar Vaga'
    +'\n3 - Inscrever Candidato'
    +'\n4 - Criar Vaga'
    +'\n5 - Exluir Vaga'
    +'\n6 - Sair'))
    
    switch(opc){
        case 1:
            listar()
            break
        case 2:
            visualizar()
            break
        case 3:
            inscrever()
            break
        case 4:
            criar()
            break
        case 5:
            excluir()
        case 6:
            alert('Saindo do Sistema')
            break
        default:
            alert('ERRO -> Digite uma opção válida')
    }
}while(opc != 6)

function criar(){
    const vaga = {vaga: prompt('Nome da vaga: '),
    descrição: prompt('Digite uma descrição: '),
    data: prompt('Digite uma data limite: '),
    candidatos:[]
    }
    lista.push(vaga)
}

function inscrever(){
    const nome = prompt('Nome do candidato: ')
    const ind = prompt('Digite o índice da vaga: ')
    let conf = prompt(`O candidato ${nome} tem interrese na vaga de ${lista[ind].vaga}.`
    +'\nConfirma os dados acima?\na) SIM\nb) NÃO\nResposta:')
    if(conf == 'A' || conf == 'a'){
        lista[ind].candidatos.push(nome)
    }else{
        alert('Refazendo Operação...')
        inscrever()
    }
}

function listar(){
    const final = lista.reduce(function(acum, elem, ind){
        acum += ind  + '-'
        acum += elem.vaga
        acum += '(' + elem.candidatos.length + ')\n'
        return acum
    },'') //acumlador sem vai começar vazio

    alert(final)
}

function visualizar(){
    const final = lista.reduce(function(acum, elem, ind){
        acum += 'Vaga número: ' + ind
        acum += '\nNome: ' + elem.vaga
        acum += '\nDescrição: ' + elem.descrição 
        acum += '\nData limite: ' + elem.data
        acum += '\nQuantidade de candidatos: ' + elem.candidatos.length
        acum += '\nCandidatos inscritos: ' + elem.candidatos + '\n\n'
        
        return acum
    },'')

    alert(final)
}

function excluir(){
    const indc = prompt('Informe o indice da vaga que deseja exluir: ')
    lista.splice(indc, 1)
}



