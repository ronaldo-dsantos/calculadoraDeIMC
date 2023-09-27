//object literal (objeto modal com as variáveis e funções)
export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'), //wrapper = document.querySelector('.modal-wrapper')
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

//função para fechar o modal
Modal.buttonClose.onclick = () => { //arrow function
  Modal.close()
}

//fechar o modal ao pressionar a tecla esc
window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}