import { Modal} from './modal.js'
import { AlertError } from './alert-error.js'
import {calculateIMC, notANumber } from './utils.js'

//variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//evento para fechar o alerta de erro caso esteja digitando algo no input
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

//função para executar o script ao clicar no botão
form.onsubmit = function(event) { 
  event.preventDefault() //tira o submit do form e a atualização da página que acontece por padrão

  const weight = inputWeight.value 
  const height = inputHeight.value  
  
  const weigthOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weigthOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}


  

