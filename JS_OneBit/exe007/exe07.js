let perg = prompt('Digite um valor:')
let num = parseFloat(perg)
let result = ""

for(let cont = 0; cont <= 10; cont += 1){
    result += `${num} X ${cont} = ${num * cont}\n`
}

window.confirm(`TABUADA DO NÚMERO ${perg}:\n${result}`)