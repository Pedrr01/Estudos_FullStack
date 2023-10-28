let car1 = window.prompt('Modelo do primeiro carro:')
let km1 = window.prompt('Velocidade do primeiro carro:')
let car2 = window.prompt('Modelo do segundo carro:')
let km2 = window.prompt('Velocidade do segundo carro:')
const vel1 = parseInt(km1)
const vel2 = parseInt(km2)

if(vel1 == vel2){
    window.confirm(`A velocidade do ${car1} e do ${car2} são iguais`)
}else if(vel1 > vel2){
    window.confirm(`Com ${vel1} km/h o ${car1} obteve a maior velocidade`)
}else{
    window.confirm(`Com ${vel2} km/h o ${car2} obteve a maior velocidade`)
}