//função de validação se não é número ou vazio
export function notANumber(value) {
  return isNaN(value) || value == ""
}

//função para calcular o IMC
export function calculateIMC(weight, height) {
  return(weight / ((height / 100) ** 2)).toFixed(2)
}