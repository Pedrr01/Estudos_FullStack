var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var atual = new Date()
var hora = atual.getHours()
msg.innerHTML = `São exatamente ${hora} horas.`

function carregar() {
    if (hora <= 12) {
            img.src = 'manhã.png'
            document.body.style.background = 'rgb(55, 130, 153)'
        } else if (hora > 12 && hora <= 16) {
            img.src = 'tarde.png'
            documente.body.style.background = 'rgb(228, 214, 20)'
        } else {
            img.src = "noite.png"
            document.body.style.background = 'rgba(0, 0, 0, 0.541)'
        }
            
        
}