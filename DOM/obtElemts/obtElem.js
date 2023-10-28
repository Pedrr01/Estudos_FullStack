function show(){
    // Tudo que está dentro da lista <ul>: ÚNICO
    const infor = document.getElementById('contact-list')
    console.log(infor)

    // Todas as tags <li> da lista <ul>: VÁRIOS
    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    // Posso selecionar elementos especificos de uma tag:
    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    //Seleção mais especifica com query e posso usar vários metodos:
    // # -> ID  . -> Classe | semelhante ao CSS
    const contact = document.querySelectorAll('#contact-list > li > label')
    // Dentro do ID contact-list, com a tag <li> e que possuam a tag <label>
    console.log(contact)

    
    
}