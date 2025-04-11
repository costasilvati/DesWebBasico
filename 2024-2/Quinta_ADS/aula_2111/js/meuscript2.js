let i = 1;
// a cada clique executa a função abaixo
function salvar(){
    let nome = document.getElementById('n').value;
    nome = nome +' '+ document.getElementById('sn').value;
    let email = document.getElementById('e').value;
    //alert('Olá ' + nome + ' seu e-mail é '+ email);
    // Recupera tBody da table
    let tBody = document.querySelector('.table tbody');
    // Cria linha (table row - tr)
    let linha = document.createElement('tr');
    // Cria colunas (table data - td)
    let colId = document.createElement('td');
    let colNome = document.createElement('td');
    let colEmail = document.createElement('td');
    // Associar valores as td
    i++; // atualiza id
    colId.innerHTML = i; // associa i a colId
    colNome.innerHTML = nome;
    colEmail.innerHTML = email;
    // Associa colunas (td) a linha (tr)
    linha.appendChild(colId);
    linha.appendChild(colNome);
    linha.appendChild(colEmail);
    //Associa linha com colunas ao body da tabela
    tBody.appendChild(linha);

}