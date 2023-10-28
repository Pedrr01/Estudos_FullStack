function gerar() {
    var n = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (n.value.length == 0) {
        window.alert('Preencha o espaço')
    } else {
        let num = Number(n.value)
        tab.innerHTML = ''
        for (var c = 0; c <= 10; c+=1) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
        }
    }
}
