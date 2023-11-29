function limpaForm(){
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('senha').value = "";
}

document.addEventListener("DOMContentLoaded", function(){
    var formulario = document.querySelector('form');

    formulario.addEventListener('submit', function(event){
        event.preventDefault();
        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let senha = document.getElementById('senha').value;
        // Captura a tabela
        let tab = document.querySelector('tbody');
        // Cria uma linha e suas colunas
        let linha = document.createElement('tr');
        let colNome = document.createElement('td');
        let colEmail = document.createElement('td');
        let colSenha = document.createElement('td');
        // Associa valores as colunas
        colNome.innerHTML = nome;
        colEmail.innerHTML = email;
        colSenha.innerHTML = senha;
        // Adiciona colunas a linha
        linha.appendChild(colNome);
        linha.appendChild(colEmail);
        linha.appendChild(colSenha);
        // Adiciona linha a tabela
        tab.appendChild(linha);
        limpaForm();
    })
    
})