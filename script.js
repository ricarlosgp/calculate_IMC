// variáveis - variables
//vaiables ou variáveis
const form = document.querySelector('form') //procure pelo document(objeto global) que têm a função de querySelector(faça uma pesquisa pelo seletor que é o ('for')) e deixa nessa variável constante que é const form 
const inputWeight = document.querySelector('#weight') //pesquise pelo seletor weight que é o nome do input que inserimos no html(id="weight") e atrela nessa variável constante que é const inputWeight  
const inputHeight = document.querySelector('#height') /*procure pelo seletor height*/


/* pegando as variáveis do modal 
const modalWrapper = document.querySelector('.modal-wrapper') //essa aqui é para abrir e fechar o modal
const modalMessage = document.querySelector('.modal .title span') //essa aqui é para a mensagem criada no spam
const modalBtnClose = document.querySelector('.modal button.close')
*/

// 3 maneiras de criar e atribuir função a um evento

//1ª - uma função anônima que é a mais simplificada. Por padrão o onsubmit carrega toda a página ao clicar no botão de submeter e para tirar o padrão ou default usa-se o event.preventDefault() na função
/*
form.onsubmit = function() {
    event.preventDefault() //evitar evento padrão

    //pegando os input. O value são os valores digitados nos input
    const weight = inputWeight.value
    const height = inputHeight.value

    console.log(weight, height)
}
/*

//2ª - uma função com o operador Arrow Functions que é a seta
form.onsubmit = () => {}

//3ª - manipulando ou controlando o submit
form.onsubmit = handleSubmit
function handleSubmit() {

}
*/

//1ª - uma função anônima que é a mais simplificada. Por padrão o onsubmit carrega toda a página ao clicar no botão de submeter e para tirar o padrão ou default usa-se o event.preventDefault() na função

const Modal = { //aqui estou criando objetos literal chamado de const Modal. Um objeto literal é composto por um par de chaves " { } ", que envolve uma ou mais propriedades. Cada propriedade segue o formato " nome: valor " e devem ser separadas por vírgula.

    //pegando as variáveis do modal 
    wrapper: document.querySelector('.modal-wrapper'), //essa aqui é para abrir e fechar o modal
    message: document.querySelector('.modal .title span'), //essa aqui é para a mensagem criada no spam
    buttonClose: document.querySelector('.modal button.close'), 

    //aqui estou registrando as funções open e close. Elas não estão sendo executadas apenas registradas em memória ram.
    open() {
        Modal.wrapper.classList.add('open') //nessa linha estamos abrindo o modal
    },
    close() {
        Modal.wrapper.classList.remove('open') //nessa linha estamos fechando o modal
    }
}

form.onsubmit = event => {
    event.preventDefault() //evitar evento padrão ou seja, o não carregamento da página para ver precisamos colocar um console.log(weight, height)

    //pegando os input. O value são os valores digitados nos input
    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}` //apresentando a mensagem após os c´calculos

    Modal.message.innerText = message 
    Modal.open() //estou executando a função open 
    
}

Modal.buttonClose.onclick = () => { /* esse modal fará com que ao clicar no x da janela irá fechar */
    Modal.close()
    
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}