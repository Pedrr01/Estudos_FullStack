function contar() {
    var ini = document.getElementById('txt.ini')
    var fim = document.getElementById('txt.fim')
    var pas = document.getElementById('txt.pas')
    var resp = document.getElementById('resp')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Preencha os dados!')
    } else if (Number(pas.value) > Number(ini.value) && Number(pas.value) > Number(fim.value)) {
        window.alert('[ERRO] Preencha os dados corretamentes!')   
    } else {
        resp.innerHTML = 'Preparando Contagem: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (Number(pas.value) == 0) 
            window.alert('PASSO VAI VALER 1')
            p = 1
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                resp.innerHTML += `${c} \u{1F449}`
            }
            resp.innerHTML += '\u{1F6A9}' 
        } else {
            for (var c = i; c >= f; c -= p) {
                resp.innerHTML += `${c} \u{1F449}`
            } 
            resp.innerHTML += '\u{1F6A9}'   
            
        } 
    } 
}