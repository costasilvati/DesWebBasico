function mudaTamanho(){
    document.getElementById('texto').style.fontSize ='35px';
}

function ocultar(){
    document.getElementById('texto').style.display = 'none';
}

function exibir(){
    document.getElementById('texto').style.display = 'block';
}

function mensagem(){
    alert('Esta é uma mensagem!');
}

function salvar(){
    var nome = document.getElementById('n').value;
    alert("Seja bem vind@ "+nome+"!!!");
}