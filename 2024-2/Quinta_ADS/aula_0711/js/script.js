function escreveConsole(){
    console.log('Clicou no botão escreve console!!');
}

function exibeDados(){
    let nome = document.getElementById('nome').value;
    let senha = document.getElementById('senha').value;
    document.getElementById('result').innerHTML = 'Nome: '+ nome +
                                                 '<br>Senha: '+ senha;
     // Exibe nome no paragrafo
    alert('Seja bem vindo(a) ' + nome); // Exibe mensagem
}

function verRadio(){
    // Versão sem for
    let elementos = document.getElementsByName('f');
    if(elementos[0].checked){
        document.getElementById('radios').innerHTML = 
                        'Você é feliz '+elementos[0].value;
    }else if(elementos[1].checked){
        document.getElementById('radios').innerHTML = 
                        'Você é feliz '+elementos[1].value;
    }else if(elementos[2].checked){
        document.getElementById('radios').innerHTML = 
                        'Você é feliz '+elementos[2].value;
    }
}

function verRadio2(){
    let elementos = document.getElementsByName('f');
    for(let i = 0; i < elementos.length; i++){
        if(elementos[i].checked){
            document.getElementById('radios').innerHTML = 
                                        "Você é feliz "+ elementos[i].value;
        }
    }
}

function verSelect(){
    // seleciona UM elemento com id curso
    let selecionado = document.querySelector('#curso'); 
    //selciona UM elemento da class outout
    document.querySelector('.output').textContent = "Curso: "+ selecionado.value;
}

