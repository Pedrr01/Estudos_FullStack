let nomeP = window.prompt("Qual seu primeiro nome?")
let sobreN = window.prompt("Qual seu sobrenome nome?")
let estud = window.prompt("Qual o seu campo de estudos?")
let nasc = window.prompt("Qual o seu ano de nascimento")
let idade = 2023 - parseInt(nasc)
window.confirm(`Nome: ${nomeP + " " + sobreN}\nCampo de estudo: ${estud}\nIdade: ${parseInt(idade)}`)
