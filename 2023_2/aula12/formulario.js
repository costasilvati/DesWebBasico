function getTexto(){
    let texto = document.getElementById('nome').value;
    window.alert("Bem vindo(a) " + texto);
}

function calcular(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let resultado = parseInt(n1) + parseInt(n2);
    document.getElementById('num1').innerHTML = n1;
    document.getElementById('num2').innerHTML = n2;
    document.getElementById('resultado').innerHTML = resultado;
}