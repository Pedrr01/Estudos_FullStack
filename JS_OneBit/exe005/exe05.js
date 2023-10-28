let nome = prompt('Qual o seu nome?')
let perg = prompt('Você já visitou alguma cidade?\n1 - SIM\n2 - NÃO')
let resp = perg.toUpperCase()

if(resp == "SIM" || perg == 1){
    let cidade = []
    while(true){
        let city = prompt('Qual cidade você visitou?')
        cidade += city
        let opc = prompt("Deseja continuar?\n1 - SIM\n2 - NÃO")
        let opc2 = opc.toUpperCase
        if(opc == 2 || opc2 == "NÃO"){
            window.confirm(`${nome} visitou as seguintes cidades:\n${cidade}`)
            break
        }
    }
}else if(resp == "NÃO" || perg == 2){
    window.confirm(`${nome} não visitou nenhuma cidade`)
}else{
    window.confirm('ERRO! você não digitou nenhuma das opções')
}
