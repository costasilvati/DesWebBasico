function limpaForm(){
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
}
function validarSenha(senha){
    var expregular = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    if(expregular.test(senha)){
        console.log("true");
        return true;
    }else{
        alert("Senha deve conter números e letras");
        console.log("false");
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    var formulario = document.querySelector('form');

    formulario.addEventListener('submit',function(event){
        event.preventDefault();
        let linha = document.createElement('tr');

        let colNome = document.createElement('td');
        let colEmail = document.createElement('td');
        let colSenha = document.createElement('td');

        colNome.innerHTML = document.getElementById('nome').value;
        colEmail.innerHTML = document.getElementById('email').value;
        colSenha.innerHTML = document.getElementById('senha').value;

        linha.appendChild(colNome);
        linha.appendChild(colEmail);
        linha.appendChild(colSenha);
        let corpoTabela = document.querySelector('tbody');
        let nome = document.getElementById('nome').value;
        if(validarSenha(document.getElementById('senha').value) && nome.length > 3){
            corpoTabela.appendChild(linha);
        }else{
            alert("Nome deve ter mais que 3 caracteres");
        }
        
        limpaForm();
    })
})