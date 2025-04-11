let i = 1; // variável global

function salvar(){
    let nome = document.querySelector('#n').value;
    nome = nome + ' '+ document.getElementById('sn').value;
    let email = document.getElementById('e').value;
    // Pegar body da tabela
    let tbody = document.querySelector('.table tbody');
    let linha = document.createElement('tr');
    // Cria os table data (td)
    let colId = document.createElement('td');
    let colNome = document.createElement('td');
    let colEmail = document.createElement('td');
    // Coloca os valore nos td's
    i++;
    colId.innerHTML = i;
    colNome.innerHTML = nome;
    colEmail.innerHTML = email; 
    // Associa td's a linha
    linha.appendChild(colId);
    linha.appendChild(colNome);
    linha.appendChild(colEmail);
    // Coloca linha no corpo da tabela
    tbody.appendChild(linha);
}







 








function salvar2() {
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
