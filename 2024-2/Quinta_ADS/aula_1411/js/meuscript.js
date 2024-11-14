let i = 1;

function salvar() {
    let nome = document.querySelector('#n').value;
    nome = nome + ' ' + document.querySelector('#sn').value;
    let email = document.getElementById('e').value;
    let tbody = document.querySelector('.table tbody'); // Seleciona o tbody
    console.log(tbody);
    
    // Criar linha
    let linha = document.createElement('tr');
    
    // Cria colunas
    let colId = document.createElement('td');
    let colNome = document.createElement('td');
    let colEmail = document.createElement('td');
    
    // Associa dados às colunas
    i++;
    colId.innerHTML = i;
    colNome.innerHTML = nome;
    colEmail.textContent = email;
    
    // Coloca colunas na linha
    linha.appendChild(colId);
    linha.appendChild(colNome);
    linha.appendChild(colEmail);
    
    // Adiciona linha no tbody
    tbody.appendChild(linha);
}
