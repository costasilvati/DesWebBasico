let contador = 1;

function salvar(){
    // Coletar dados
    let nome = document.getElementById('n').value;
    nome = nome + " " + document.getElementById('sn').value;
    let email = document.getElementById('e').value;
    // Capturar corpo da tabela
    let tBody = document.querySelector('.table tbody');
    // Criar linha e colunas
    let linha = document.createElement('tr'); // linha
    let colId = document.createElement('td'); // col 1
    let colNome = document.createElement('td'); // col 2
    let colEmail = document.createElement('td'); // col 3
    // Colocar valores nas colunas
    contador++;
    colId.innerHTML = contador;
    colNome.innerHTML = nome;
    colEmail.innerHTML = email;
    // Associar colunas a linha
    linha.appendChild(colId);
    linha.appendChild(colNome);
    linha.appendChild(colEmail);
    // associar linha a tabela
    tBody.appendChild(linha);
}