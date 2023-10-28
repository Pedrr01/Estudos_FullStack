function addInput(){
    //Variavel da lista <ul>
    const ul = document.getElementById('inputs')

    //Variavel para criar elementos do tipo <li>
    const newLi = document.createElement('li')
    newLi.innerText = 'Novo input: '

    //Criando tag <input> add o tipo e o nome
    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    //Adicionando o <input> no <li>
    //Adicionando a <li> na lista <li>
    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}