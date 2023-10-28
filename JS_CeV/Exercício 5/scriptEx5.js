var num = document.getElementById('txtn')
var arqui = document.getElementById('arqui')
var resp = document.getElementById('resp')
vlista = []

function Inlista(l, n) {
    if (l.indexOf(Number(n)) == -1) {
        return false
    } else {
        return true
    }
}

function adicionar() {
    if (num.value.length == 0) {
        window.alert('[ERRO] Digite um valor!')
    } else {
        if (Inlista(vlista, num.value) == true) {
            window.alert(`O número ${num.value} já contem na lista`)
        } else {
            vlista.push(Number(num.value))
            var item = document.createElement('option')
            item.text = `Número ${num.value} adicionado!`
            arqui.appendChild(item)
            resp.innerHTML = ''
        }
        
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(vlista.length == 0) {
        window.alert('[ERRO] Adicione valores na lista!')
    } else {
        var total = vlista.length
        var max = vlista[0]
        var min = vlista[0]
        var soma = 0
        var media = 0
        for (var cont in vlista) {
            soma += vlista[cont]
            if (vlista[cont] > max) 
                max = vlista[cont]
            if (vlista[cont] < min)
                min = vlista[cont]
        }
        media = soma / total

        resp.innerHTML = ''
        resp.innerHTML += `<p>Ao todo temos ${total} números.</p>`
        resp.innerHTML += `<p>O maior valor foi ${max}.</p>`
        resp.innerHTML += `<p>O menor valor foi ${min}.</p>`
        resp.innerHTML += `<p>A soma de todos os valores é de ${soma}.</p>`
        resp.innerHTML += `<p>A média da lista foi de ${media}.</p>`
    }
}

