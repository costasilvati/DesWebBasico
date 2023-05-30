function toJson(){
    let jsonSend = 
    `{ 
        "nome":"${document.getElementById('nome').value}",
       "email": "${document.getElementById('email').value}",
       "nascimento":"${document.getElementById('nascimento').value}",
       "senha":"${document.getElementById('senha').value}",
       "cep":"${document.getElementById('cep').value}",
       "uf":"${document.getElementById('uf').value}",
       "logradouro":"${document.getElementById('rua').value}",
       "bairro":"${document.getElementById('bairro').value}",
       "cidade":"${document.getElementById('cidade').value}",
       "ibge":"${document.getElementById('ibge').value}"
    }`;
    alert(jsonSend);
}

function salvar3(){
    let tb = document.querySelector('.table');
    let row = tb.insertRow();
    let cel0 = row.insertCell(0);
    let cel1 = row.insertCell(1);
    let cel2 = row.insertCell(2);
    let cel3 = row.insertCell(3);
    let cel4 = row.insertCell(4);
    cel0.innerHTML = document.getElementById('nome').value;
    cel1.innerHTML = document.getElementById('email').value;
    cel2.innerHTML = document.getElementById('nascimento').value;
    cel3.innerHTML = document.getElementById('uf').value;
    cel4.innerHTML = '<i class="bi bi-pencil-square"></i>'
    limpar()
}

function limpar(){
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('pass').value = '';
    document.getElementById('nascimento').value = '';
    document.getElementById('estado').value = '';
}












function salvar2(){
    let table = document.querySelector('.table');
    let row = table.insertRow();
    let cel0 = row.insertCell(0);
    let cel1 = row.insertCell(1);
    let cel2 = row.insertCell(2);
    let cel3 = row.insertCell(3);
    let cel4 = row.insertCell(4);
    let nome = document.getElementById('nome').value;
    cel0.innerHTML = nome;
    cel1.innerHTML = document.getElementById('email').value;
    cel2.innerHTML = document.getElementById('nascimento').value;
    cel3.innerHTML = document.getElementById('estado').value;
    cel4.innerHTML = '<i class="bi bi-pencil-square"></i>';
}

function salvar(){
    let tableUser = document.querySelector('table');
    let row = tableUser.insertRow();
    let cel0 = row.insertCell(0);
    cel0.innerHTML = document.getElementById('nome').value;
    let cel1 = row.insertCell(1);
    cel1.innerHTML = document.getElementById('email').value;
    let cel2 = row.insertCell(2);
    cel2.innerHTML = document.getElementById('nascimento').value;
    let cel3 = row.insertCell(3);
    cel3.innerHTML = document.getElementById('estado').value;
}