// Função gnérica
export function valida(input){
  const tipoDeInput = input.dataset.tipo
  if(validadores[tipoDeInput]){
    validadores[tipoDeInput](input)
  }
}

const validadores = {
  nascimento:input => validaDataNascimento(input),
  cep:input => carregacep(input)
}

function carregacep(cepiInformado){
  pesquisacep(cepiInformado.value)
}

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById('rua').value=("");
  document.getElementById('bairro').value=("");
  document.getElementById('cidade').value=("");
  document.getElementById('uf').value=("");
  //document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
      //Atualiza os campos com os valores.
      document.getElementById('rua').value=(conteudo.logradouro);
      document.getElementById('bairro').value=(conteudo.bairro);
      document.getElementById('cidade').value=(conteudo.localidade);
      document.getElementById('uf').value=(conteudo.uf);
     // document.getElementById('ibge').value=(conteudo.ibge);
     console.log(conteudo.logradouro)
  } //end if.
  else {
      //CEP não Encontrado.
      limpa_formulário_cep();
      alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {

  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, '');

  //Verifica se campo cep possui valor informado.
  if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {

          //Preenche os campos com "..." enquanto consulta webservice.
          document.getElementById('rua').value="...";
          document.getElementById('bairro').value="...";
          document.getElementById('cidade').value="...";
          document.getElementById('uf').value="...";
          //document.getElementById('ibge').value="...";

          //Cria um elemento javascript.
          var script = document.createElement('script');

          //Sincroniza com o callback.
          script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

          //Insere script no documento e carrega o conteúdo.
          document.body.appendChild(script);

      } //end if.
      else {
          //cep é inválido.
          limpa_formulário_cep();
          alert("Formato de CEP inválido.");
      }
  } //end if.
  else {
      //cep sem valor, limpa formulário.
      limpa_formulário_cep();
  }
};


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
