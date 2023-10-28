let opc = ''
function tri(x = 0, y = 0){
    let tot = (x * y) / 2
    return tot
}
function ret(x = 0, y = 0){
    let tot = x * y
    return tot
}
function quad(x = 0){
    let tot = x * x
    return tot
}
function tra(x = 0, y = 0, z = 0){
    let tot = ((x + y) * z) / 2
    return tot
}
function cir(x = 0){
    let tot = 3.14 * (x * x)
    return tot
}
do{
    opc = prompt(
        'Escolha uma opção:'
        +'\n1 - Área do triangulo'
        +'\n2 - Área do retângulo'
        +'\n3 - Área do quadrado'
        +'\n4 - Área do trapézio'
        +'\n5 - Área do círcilo'
        +'\n6 - Sair'
    )
    switch (opc) {
        case '1':
            var base = prompt('Informe a base:')
            var altura = prompt('Informe a altura:')
            var result = tri(base, altura)
            confirm(result)
            break;
        case '2':
            var base = prompt('Informe a base:')
            var altura = prompt('Informe a altura:')
            var result = ret(base, altura)
            confirm(result)
            break;
        case '3':
            var lado = prompt('Informe a lado:')
            var result = quad(lado)
            confirm(result)
            break;
        case '4':
            var base1 = prompt('Informe a base maior:')
            var base2 = prompt('Informe a base menor:')
            var altura = prompt('Informe a altura:')
            var result = tra(base1, base2, altura)
            confirm(result)
            break;
        case '5':
            var raio = prompt('Informe a raio:')
            var result = cir(raio)
            confirm(result)
            break;
        case '6':
            alert('Finalizando...')
            break;
        default:
            alert('Erro!!! Informe um valor valido.')
    }
}while(opc != 6)