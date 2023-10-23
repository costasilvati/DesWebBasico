function exibeData(){
    document.getElementById('par1').innerHTML = Date();
}

function removeData(){
    document.getElementById('par1').innerHTML = "";
}

function copiarTexto(){
    let texto = document.getElementById("original").innerHTML;
    document.getElementById("copia").innerHTML = texto;
}

function copiarInput(){
    let nome = document.getElementById('nome').value;
    alert("Olá " + nome);
}

function ligar(){
    document.getElementById('lampada').src = 
    "https://www.w3schools.com/js/pic_bulbon.gif";
}

function desligar(){
    document.getElementById('lampada').src = 
    "https://www.w3schools.com/js/pic_bulboff.gif";
}

function mudarEstilo(){
    document.getElementById('par2').style = "font-size: 100px; ";
}