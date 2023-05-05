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