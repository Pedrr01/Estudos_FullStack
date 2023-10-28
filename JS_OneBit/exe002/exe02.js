let x = window.prompt("Digite um valor:")
let y = window.prompt("Digite outro valor:")
x = x.replace(',', '.')
y = y.replace(',', '.')
const valor1 = parseFloat(x)
const valor2 = parseFloat(y)

let soma = valor1 + valor2 
let subt = valor1 - valor2  
let multi = valor1 * valor2  
let divi = valor1 / valor2 
window.confirm(`A soma entre ${valor1} + ${valor2} = ${soma}
\nA subtração entre ${valor1} - ${valor2} = ${subt}
\nA multiplicação entre ${valor1} x ${valor2} = ${multi}
\nA divisão entre ${valor1} / ${valor2} = ${divi}`)