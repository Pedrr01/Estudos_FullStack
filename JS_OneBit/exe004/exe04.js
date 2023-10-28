let med = window.prompt("Digite o valor em metros:")
let opc = window.prompt('Escolha a medida de conversão:\n1 - mm\n2 - cm\n3 - dm\n4 - dam\n5 - hm\n6 - km')
const metro = parseFloat(med)
const mm = metro * 1000
const cm = metro * 100
const dm =  metro * 10
const dam = metro * 0.1
const hm =  metro * 0.01
const km = metro * 0.001


switch(opc){
    case 'mm':
    case '1':
        window.confirm(`${mm} mm`)
        break
    case 'cm':
    case '2':
        window.confirm(`${cm} cm`)
        break
    case 'dm':
    case '3':
        window.confirm(`${dm} dm`)
        break
    case 'dam':
    case '4':
        window.confirm(`${dam} dam` )
        break
    case 'hm':
    case '5':
        window.confirm(`${hm} hm`)
        break
    case 'km':
    case '6':
        window.confirm(`${km} km`)
        break
    default:
        window.confirm('Opção INVALIDA')
        break
}