// Função gnérica
export function valida(input){
  const tipoDeInput = input.dataset.tipo
  if(validadores[tipoDeInput]){
    validadores[tipoDeInput](input)
  }
}

const validadores = {
  nascimento:input => validaDataNascimento(input)
  //,nome:input => validaNome(input)
}

function validaDataNascimento(input){
  // const não é mutavel; precisa ser inicializada na declaração
  // const também é valida somente escopo de declaração
  const dataRecebida = new Date(input.value)
  let mensagem = ' '

  if(!maiorQue18(dataRecebida)){
    mensagem = 'Você deve ser maior de 18 anos para se cadastrar.'
  }
  // Editando a mesnsam padrão de validação
  input.setCustomValidity(mensagem)
}

function maiorQue18(data){
  const dataAtual = new Date()
  const dataMais18 = new Date(data.getUTCFullYear()+18, data.getUTCMonth(), data.getUTCDate())

  return dataMais18 <= dataAtual
}
