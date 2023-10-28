function verificar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var nasc = document.getElementById('txtano')
    var resp = document.getElementById('res')
    if (nasc.value.length == 0 || Number(nasc.value) >= ano) {
        window.alert('[ERRO] Verifique os dados')
    } else {
        var sexoM = document.getElementById('mas')
        var sexoF = document.getElementById('fem')
        var idade = ano - Number(nasc.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        genero = ''
        if (sexoM.checked) {
            genero = 'Homem'
            if (idade < 12) {
                // Criança
                img.setAttribute('src', 'criançaM.png')
            } else if (idade > 12 && idade < 18) {
                // Jovem
                img.setAttribute('src', 'jovemM.png')
            } else if (idade > 18 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.png')
            }

        } else if (sexoF.checked) {
            genero = 'Mulher'
            if (idade < 12) {
                // Criança
                img.setAttribute('src', 'criançaF.png')
            } else if (idade > 12 && idade < 18) {
                // Jovem
                img.setAttribute('src', 'jovemF.png')
            } else if (idade > 18 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
    resp.style.textAlign = 'center'
    resp.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos!`
    resp.appendChild(img)
    }
}