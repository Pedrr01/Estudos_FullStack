let lista = []

while(true){
    let opc = prompt(
        'Hospital Albert Einstein'
        + '\n1 - Novo Paciente'
        + '\n2 - Paciente Consultado'
        + '\n3 - SAIR')
    if(opc == 1){
        let nome = prompt('Nome do paciente:')
        lista.push(nome)
    }else if(opc == 2){
        let consul = lista.shift()
        alert(`O paciente ${consul} foi consultado!`)
    }else if(opc == 3){
        confirm('FINALIZANDO SISTEMA...')
        break
    }
    let tela = ''
    for(let c = 0; c < lista.length; c ++)
    tela += (`${c+1} - ${lista[c]}\n`)
    confirm('LISTA DE ESPERA:\n' + tela)
}